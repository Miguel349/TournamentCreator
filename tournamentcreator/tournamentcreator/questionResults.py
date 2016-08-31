

results = List(
        scope=Scope.settings,
        help="List of results per Question",
)

totalPoints= Integer(
        default=0,
        scope=Scope.user,
        help="Number of points",
)

totalTime= Integer(
        default=0,
        scope=Scope.user,
        help="Time used to answer",
)