import { DomSanitizer } from '@angular/platform-browser';
import { TeamMember } from './teamMember';

export class LandingpageComponentModel {
  public headline: string;
  public headerbutton: string[];
  public headerdescription: string;
  public functionheadline: string;
  public functionvernetzen: string[];
  public functionmatch: string[];
  public functionbelohnen: string[];
  public teamheadline: string;
  public teamdescription: string;
  public teamMembers;
  public teambackground;
  public mitmachenheadline: string;
  public mitmachendescription: string;
  public mitmachenbutton: string;
  public instaheadline: string;
  public instadescription: string;
  public mediaheadline: string;

  constructor(private sanitizer: DomSanitizer) {
    this.headline = "What's your \n" + 'impact?';
    this.headerbutton = ['Zur Anwendung', 'Coming soon'];
    this.headerdescription = 'Die App impact \uFF0D ein Zuhause für gemeinnützige Aktionen, auf der Personen oder Organisationen mit engagierten Bürger:innen vereint werden.';
    this.functionheadline = 'Wie funktioniert impact?';
    this.functionvernetzen = [
      'Wir vernetzten Euch',
      'impact will die Hürden, sich gemeinnützig zu engagieren, minimieren: Ihr tut Gutes, wir erledigen den Rest. ' +
        'Dafür schaffen wir eine Plattform, die alle relevanten Akteure zusammenführt, ohne Aufwand und Druck. ' +
        'Ihr findet sowohl als Privatperson, als auch als Organisation, das "passende Gegenüber".'
    ];
    this.functionmatch = [
      'Wir finden Euer Match',
      'Basierend auf Eurem Profil schlagen wir Euch automatisch und spielerisch passende Möglichkeiten vor, Euch einzubringen. ' +
        'Alternativ könnt Ihr Euch manuell mit diversen Filtermöglichkeiten selbst auf die Suche machen.'
    ];
    this.functionbelohnen = [
      'Euer Einsatz wird belohnt',
      'Soziales Engagement verdient Wertschätzung: Dafür haben wir gemeinsam mit unseren strategischen Partnern den ' +
        '"Helferschein" ins Leben gerufen, der als Nachweis Eurer guten Taten dient und Euch perspektivisch bei vielen ' +
        'Gelegenheiten positiv und vorteilhaft angerechnet werden wird.'
    ];
    this.teamheadline = 'Wer sind wir?';
    this.teamdescription =
      'Wir sind ein stetig wachsendes und bunt gemischtes Team von gut 20 Studierenden aus ' +
      'Konstanz & Umgebung, holokratisch organisiert in den Kreisen Koordination, Strategie, Kommunikation, ' +
      'Design und IT. Wir arbeiten teamübergreifend gemeinsam an den anstehenden Aufgaben und synchronisieren uns ' +
      'mindestens alle 2 Wochen in der großen Runde. ' +
      'Mit großem Engagement und Tatendrang sowie sich ergänzender, individueller Fähigkeiten und ' +
      'Erfahrungen kommen wir der Umsetzung unserer Vision stetig näher.';
    this.teamMembers = [
      new TeamMember('Tobias', '../../../assets/images/portraits/Tobi', '#c004d9', 'Initiator, Entwicklung & Strategie', 'tobias@yourimpact.eu'),
      new TeamMember('Fabian', '../../../assets/images/portraits/Fabian', '#5a13f2', 'Co-Initiator, Koordination & Produkt', 'fabian@yourimpact.eu'),
      new TeamMember('Julia', '../../../assets/images/portraits/Julia', '#1b78f2', 'Koordination & Kommunikation', 'julia@yourimpact.eu'),
      new TeamMember('Michael', '../../../assets/images/portraits/Michael', '#5a13f2', 'Kommunikation & Strategie', 'michael@yourimpact.eu'),
      new TeamMember('Emine', '../../../assets/images/portraits/Emine', '#1b78f2', 'Design', 'null'),
      new TeamMember('Sophia', '../../../assets/images/portraits/noimage', '#c004d9', 'Entwicklung', 'null'),
      new TeamMember('Ena', '../../../assets/images/portraits/Ena', '#1b78f2', 'Design', 'null'),
      new TeamMember('Florian', '../../../assets/images/portraits/noimage', '#5a13f2', 'Recht', 'null'),
      new TeamMember('Lena', '../../../assets/images/portraits/Lena', '#5a13f2', 'Strategie & Produkt', 'null'),
      new TeamMember('Lara', '../../../assets/images/portraits/Lara', '#c004d9', 'Social Media', 'null'),
      new TeamMember('Paula', '../../../assets/images/portraits/Paula', '#1b78f2', 'Design', 'null'),
      new TeamMember('Nikolai', '../../../assets/images/portraits/Nico', '#c004d9', 'Entwicklung', 'null'),
      new TeamMember('Lena', '../../../assets/images/portraits/noimage', '#c004d9', 'Entwicklung', 'null'),
      new TeamMember('Julia', '../../../assets/images/portraits/noimage', '#c004d9', 'Entwicklung', 'null'),
      new TeamMember('Konstantin', '../../../assets/images/portraits/noimage', '#c004d9', 'Entwicklung', 'null'),
      new TeamMember('Sonja', '../../../assets/images/portraits/noimage', '#c004d9', 'Entwicklung', 'null'),
      new TeamMember('Tilman', '../../../assets/images/portraits/noimage', '#c004d9', 'Entwicklung', 'null'),
      new TeamMember('Fabian', '../../../assets/images/portraits/noimage', '#5a13f2', 'Strategie', 'null'),
      new TeamMember('Jakob', '../../../assets/images/portraits/noimage', '#c004d9', 'Entwicklung', 'null'),
      new TeamMember('Roman', '../../../assets/images/portraits/noimage', '#1b78f2', 'Kommunikation', 'null')
    ];
    this.mitmachenheadline = 'Du möchtest mitmachen?';
    this.mitmachendescription =
      'Du bist von unserem Vorhaben begeistert und möchtest Dich einbringen? Dann werde ' +
      'Teil von impact! Wir freuen uns über jede Unterstützung für unser ambitioniertes Projekt. Ob als „freie ' +
      'Mitarbeiter:in“ oder als Mitglied, Du kannst den Bereich und Umfang Deines Engagements selbst bestimmen.';
    this.mitmachenbutton = 'Kontaktiere uns';
    this.instaheadline = 'Folge uns auf ';
    this.instadescription = 'Bleib immer auf dem Laufenden durch unsere Social Media Accounts';
    this.mediaheadline = 'Lies, was Medien über uns sagen';
  }

  public clone(): LandingpageComponentModel {
    const clonedModel: LandingpageComponentModel = new LandingpageComponentModel(this.sanitizer);
    clonedModel.headerbutton = this.headerbutton;
    clonedModel.headline = this.headline;
    clonedModel.functionbelohnen = this.functionbelohnen;
    clonedModel.functionmatch = this.functionmatch;
    clonedModel.functionvernetzen = this.functionvernetzen;
    clonedModel.functionheadline = this.functionheadline;
    clonedModel.teamdescription = this.teamdescription;
    clonedModel.teamheadline = this.teamheadline;
    clonedModel.teambackground = this.teambackground;
    clonedModel.mitmachenbutton = this.mitmachenbutton;
    clonedModel.mitmachendescription = this.mitmachendescription;
    clonedModel.mitmachenheadline = this.mitmachenheadline;
    clonedModel.teamMembers = this.teamMembers;
    clonedModel.instaheadline = this.instaheadline;
    clonedModel.instadescription = this.instadescription;
    clonedModel.mediaheadline = this.mediaheadline;
    return clonedModel;
  }
}
