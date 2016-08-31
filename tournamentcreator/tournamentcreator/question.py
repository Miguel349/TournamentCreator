
from xblock.core import XBlock
from xblock.fields import Scope, String, List, Integer


@XBlock.needs("i18n")
class Question():

    statement = String(
            display_name=_("Statement"),
            help=_("Statement of the question"),
            scope=Scope.content,
            default=""
    )

    type = String(
            display_name=_("QuestionType"),
            help=_("Type of the question"),
            scope=Scope.content,
            default=""
    )

    url = String(
            display_name=_("Url"),
            help=_("Url of question for Video or Image types"),
            scope=Scope.content,
            default=""
    )

    answers = List(
            display_name=_("Questions"),
            help=_("List of Questions for this tournament"),
            scope=Scope.content,
            default=[],
            list_style='set',
    )

    correctAnswer= Integer(
        default=0,
        scope=Scope.user,
        help="Number of points",
    )


    @property
    def display_name_with_default(self):
        values_list = []
        for entry in self.get_parent().human_readable_choices:
            if entry["value"] in self.values:
                display_name = strip_tags(entry["display_name"])  # Studio studio_view can't handle html in display_name
                if len(display_name) > 20:
                    display_name = display_name[:20] + u'…'
                values_list.append(display_name)
        return self._(u"Tip for {list_of_choices}").format(list_of_choices=u", ".join(values_list))

    def mentoring_view(self, context=None):
        """ Render this XBlock within a mentoring block. """
        html = loader.render_template("templates/html/tip.html", {
            'content': self.content,
            'width': self.width,
            'height': self.height,
        })
        return Fragment(html)

    def student_view(self, context=None):
        """ Normal view of this XBlock, identical to mentoring_view """
        return self.mentoring_view(context)

    def clean_studio_edits(self, data):
        """
        Clean up the edits during studio_view save
        """
        if "values" in data:
            data["values"] = list([unicode(v) for v in set(data["values"])])

    def validate_field_data(self, validation, data):
        """
        Validate this block's field data.
        """
        super(TipBlock, self).validate_field_data(validation, data)

        def add_error(msg):
            validation.add(ValidationMessage(ValidationMessage.ERROR, msg))

        try:
            valid_values = set(self.get_parent().all_choice_values)
        except Exception:
            pass
        else:
            for dummy in set(data.values) - valid_values:
                add_error(self._(u"A choice selected for this tip does not exist."))

    @classmethod
    def parse_xml(cls, node, runtime, keys, id_generator):
        """
        Construct this XBlock from the given XML node.
        """
        block = runtime.construct_xblock_from_class(cls, keys)

        block.values = cls.values.from_string(node.get('values', '[]'))
        block.width = node.get('width', '')
        block.height = node.get('height', '')

        block.content = unicode(node.text or u"")
        for child in node:
            block.content += etree.tostring(child, encoding='unicode')

        return block