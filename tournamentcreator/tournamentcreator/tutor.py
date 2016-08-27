class Tutor(XBlock):
	name = ""
	id= ""
	searchparams=""
	subject = ""
	tournamentList = []
	
	getName ():
		return this.name
	getSubject():
		return this.subject
	getTournamentsList():
		return this.tournamentList
	
	newTournament(name, subject searchparams):
		this.name=name
		this.subject=subject
		this.searchparams=searchparams
		this.id=5random;
		this.tournamentList.append(name);
		
