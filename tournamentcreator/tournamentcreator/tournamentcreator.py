# -*- coding: utf-8 -*-
#
# Copyright (C) 2014 edX
#
# Authors:
#         Miguel Pagán Murphy <miguelpaganmurphy@gmail.com>
#
# This software's license gives you freedom; you can copy, convey,
# propagate, redistribute and/or modify this program under the terms of
# the GNU Affero General Public License (AGPL) as published by the Free
# Software Foundation (FSF), either version 3 of the License, or (at your
# option) any later version of the AGPL published by the FSF.
#
# This program is distributed in the hope that it will be useful, but
# WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Affero
# General Public License for more details.
#
# You should have received a copy of the GNU Affero General Public License
# along with this program in a file in the toplevel directory called
# "AGPLv3".  If not, see <http://www.gnu.org/licenses/>.
#

# Imports ###########################################################

"""This XBlock is the main one of the TournamentCreator App, whose purpose
is developing small test methods to help the students gain more knowledge
or asses them, by obtaining"""
import logging
import pkg_resources

from xblock.core import XBlock
from xblock.fields import Scope, Integer, List, String, DateTime
from xblock.fragment import Fragment
"""from xblockutils.resources import ResourceLoader"""
	
class TCXBlock(XBlock):
	
	log = logging.getLogger(__name__)
	"""
	TO-DO: document what your XBlock does.
	"""
	# Fields are defined on the class.  You can access them in your code as
	# self.<fieldname>.	
	
	points= Integer(
	default=0, 
	scope=Scope.user,
	help="Number of points",
	)
	
	TournamentID= Integer(
	default=0, 
	scope=Scope.user,
	help="Number of points",
	)
        
	nquestions = Integer(
	default=0, 
	scope=Scope.user_state,
	help="Number of questions",
	)
    
	correct_answers = Integer(
	default=5, 
	scope=Scope.user_state,
	help="Number of questions",
	)
	
	tournamentID = Integer(
	default=0, 
	scope=Scope.user_state,
	help="Number of questions",
	)

	start = DateTime(
	default=None, scope=Scope.settings,
	help="ISO-8601 formatted string representing the start date of this assignment. We ignore this."
	)

	due = DateTime(
	default=None, scope=Scope.settings,
	help="ISO-8601 formatted string representing the due date of this assignment. We ignore this."
	)
	
	visible = String(
	default="No", 
	scope=Scope.settings,
	help="Indicates wether the tournament is visible or not",
	)
	
	questions = List(
	scope=Scope.settings,
	help="List of questions for the assesment",
	)
	
	active_tournaments = List(
	scope=Scope.settings,
	help="List of questions for the assesment",
	)
	
	temp = List(
	scope=Scope.settings,
	help="List of questions for the assesment",
	)
	
	finished_tournaments = List(
	scope=Scope.settings,
	help="List of questions for the assesment",
	)
	
	active_tournaments = List(
	scope=Scope.settings,
	help="List of questions for the assesment",
	)
	
   
		
	def days_between(d1, d2):
		a = dt.datetime(2013,12,30,23,59,59)
		b = dt.datetime(2013,12,31,23,59,59)
		return (b-a).total_seconds()
		
		
	def resource_string(self, path):
		"""Handy helper for getting resources from our kit."""
		data = pkg_resources.resource_string(__name__, path)
		return data.decode("utf8")
		
	def new_tournament(self, context=None):
	
		return frag
		
		
	def studio_view(self, context):	
		html = self.resource_string("public/admin/html/mainMenu.html")
		frag2 = Fragment(html.format(self=self))
		html2 = self.resource_string("public/html/New_Tournament.html")
		frag2.add_css(self.resource_string("public/admin/css/tournamentcreator.css"))
		img=self.runtime.local_resource_url(self, "public/admin/icons/listasd.png")
		
		frag2.add_content(html2)
		frag2.add_javascript(self.resource_string("public/admin/js/interface.js"))
		frag2.initialize_js('studio')
		return frag2
		
		# TO-DO: change this view to display your data your own way.
	def student_view(self, context=None):
		"""
		The primary view of the TCXBlock, shown to students
		when viewing courses.
		"""
		html = self.resource_string("public/html/tournamentcreator.html")
		frag = Fragment(html.format(self=self))
		frag.add_css(self.resource_string("public/admin/css/tournamentcreator.css"))
		frag.add_css(self.resource_string("public/css/bootstrap.css"))
		frag.add_javascript(self.resource_string("public/js/src/tournamentcreator.js"))
		frag.initialize_js('TCXBlock')
		return frag
		
	@XBlock.json_handler
	def Load_Tournament(self, data, suffix=''):
		for x in xrange(len(self.active_tournaments)):
				if data["Name"]==self.active_tournaments[x]['TName']:
					for y in xrange(len(self.questions)):
						if self.active_tournaments[x]['TournamentID']==self.nquestions[y]['TournamentID']:
							temp.push(self.nquestions[y])
		return 1
		
	@XBlock.json_handler	
	def Load_Tournaments(self, data, suffix=''):
		self.temp[:]=[]
		for x in xrange(len(self.active_tournaments)):
			self.temp.append(self.active_tournaments[x])
		
		return self.temp
		

	@XBlock.json_handler
	def init_tournament(self, data, suffix=''):
		"""
		An example handler, which increments the data.
		"""
		
		self.tournamentID=self.tournamentID+1
		self.nquestions=data['NQuestions']
		self.active_tournaments.append({
			'TournamentID': self.tournamentID,
			'TName': data['TName'],
			'NQuestions': data['NQuestions']
		})
		
		for x in xrange(self.nquestions):
			
			if data['question'][x]['Type']=="Multiple": 
				self.questions.append({
					'TournamentID': self.tournamentID,
					'QuestionN': data['question'][x]['QuestionN'],
					'Type' : data['question'][x]['Type'],
					'Question' : data['question'][x]['Question'],
					'Answer1' : data['question'][x]['Answer1'],
					'Answer2' : data['question'][x]['Answer2'],
					'Answer3' : data['question'][x]['Answer3'],
					'Answer4' : data['question'][x]['Answer4'],
					'CAnswer' : data['question'][x]['CAnswer'],
				})
			
			if data['question'][x]['Type']=="Image": 
				self.questions.append({
					'TournamentID': self.tournamentID,
					'QuestionN': data['question'][x]['QuestionN'],
					'Type' : data['question'][x]['Type'],
					'Question' : data['question'][x]['Question'],
					'Tip' : data['question'][x]['Tip'],
					'Answer' : data['question'][x]['Answer'],
					'Url' : data['question'][x]['Url'],
				})
					
			if data['question'][x]['Type']=="Video": 
				self.questions.append({
					'TournamentID': self.tournamentID,
					'QuestionN': data['question'][x]['QuestionN'],
					'Type' : data['question'][x]['Type'],
					'Question' : data['question'][x]['Question'],
					'Tip' : data['question'][x]['Tip'],
					'Answer' : data['question'][x]['Answer'],
					'Url' : data['question'][x]['Url'],
				})
				
		return 0
		#for data['QuestionN']{
		
		#}


	# TO-DO: change this handler to perform your own actions.  You may need more
	# than one handler, or you may not need any handlers at all.
	@XBlock.json_handler
	def speed_mode(self, data, suffix=''):
		"""
		An example handler, which increments the data.
		"""
	# Just to show data coming in...
		
		assert data['hello'] == 'world'
	
		self.count += 1
		return {"count": self.count}


	# TO-DO: change this handler to perform your own actions.  You may need more
	# than one handler, or you may not need any handlers at all.
	@XBlock.json_handler
	def config_screen_four(self, data, suffix=''):
		"""
		An example handler, which increments the data.
		"""
		# Just to show data coming in...
		assert data['hello'] == 'world'
		self.count += 1
		return {"count": self.count}


	# TO-DO: change this to create the scenarios you'd like to see in the
	# workbench while developing your XBlock.
	@staticmethod
	def workbench_scenarios():
		"""A canned scenario for display in the workbench."""
		return [("TCXBlock",
		"""
		<tournamentcreator/>
		"""),
		]
		
class SpeedTournament(XBlock):
		# TO-DO: change this view to display your data your own way.
	def student_view(self, context=None):
		"""
		The primary view of the TCXBlock, shown to students
		when viewing courses.
		"""
		if self.visible:
			html = self.resource_string("static/html/tournamentcreator.html")
			frag = Fragment(html.format(self=self))
			frag.add_css(self.resource_string("static/css/tournamentcreator.css"))
			frag.add_javascript(self.resource_string("static/js/src/tournamentcreator.js"))
			frag.initialize_js('TCXBlock')
			return frag
		else:	
			html = self.resource_string("static/html/t_closed.html")
			frag = Fragment(html.format(self=self))
			frag.add_css(self.resource_string("static/css/tournamentcreator.css"))
			frag.add_javascript(self.resource_string("static/js/src/t_closed.js"))
			frag.initialize_js('TClosed')
			return frag

	def studio_view(self, context):	
		html = self.resource_string("static/html/Studio_View.html")
		frag = Fragment(html.format(self=self))
		frag.add_css(self.resource_string("static/css/tournamentcreator.css"))
		frag.add_javascript(self.resource_string("static/js/src/studio.js"))

		frag.initialize_js('studio')
		return frag
	
		
