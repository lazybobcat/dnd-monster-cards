import { Component } from '@angular/core';
import { MonsterLibraryService } from 'src/app/services/monster-library.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public sidebarOpened = false;

    constructor(
        private monsterLibrary: MonsterLibraryService
    ) {
        // this.monster = new Monster();
        // this.monster.CR = 23;
        // this.monster.name = "Kraken";
        // this.monster.HPMax = 472;
        // this.monster.HPBase = 189;
        // this.monster.nbDie = 27; // 27d20+189
        // this.monster.ac = 18;
        //
        // this.monster.imageUrl = 'https://www.ballecourbe.ca/wp-content/uploads/2021/08/Kraken.jpg';
        //
        // this.monster.size = MonsterSizeEnum.GIGANTIC;
        // this.monster.type = "Créature monstrueuse";
        // this.monster.alignment = MonsterAlignmentEnum.CE;
        // this.monster.speed.running = 6;
        // this.monster.speed.swimming = 18;
        //
        // this.monster.abilities = new AbilityScores([
        //     {ability: AbilitiesEnum.STRENGTH, score: 30},
        //     {ability: AbilitiesEnum.DEXTERITY, score: 11},
        //     {ability: AbilitiesEnum.CONSTITUTION, score: 25},
        //     {ability: AbilitiesEnum.INTELLIGENCE, score: 22},
        //     {ability: AbilitiesEnum.WISDOM, score: 18},
        //     {ability: AbilitiesEnum.CHARISMA, score: 20},
        // ]);
        // this.monster.savingThrows = new SavingThrows([
        //     {ability: AbilitiesEnum.STRENGTH, proficiency: true},
        //     {ability: AbilitiesEnum.DEXTERITY, proficiency: true},
        //     {ability: AbilitiesEnum.CONSTITUTION, proficiency: true},
        //     {ability: AbilitiesEnum.INTELLIGENCE, proficiency: true},
        //     {ability: AbilitiesEnum.WISDOM, proficiency: true},
        //     {ability: AbilitiesEnum.CHARISMA, proficiency: false},
        // ])
        // this.monster.skills = [new Skill("Discrétion", 4)];
        // this.monster.vulnerabilities = [];
        // this.monster.resistances = [];
        // this.monster.immunities = [
        //     {type: 'foudre', fromNonMagicalAttacks: false},
        //     {type: 'contondants', fromNonMagicalAttacks: false},
        //     {type: 'perforants', fromNonMagicalAttacks: true},
        //     {type: 'tranchants', fromNonMagicalAttacks: true},
        //     {type: 'Terrorisé', fromNonMagicalAttacks: false},
        //     {type: 'Paralysé', fromNonMagicalAttacks: false},
        // ];
        // this.monster.senses = ['Perception passive 14', 'vision parfaite 36m'];
        // this.monster.languages = ['abyssal', 'céleste', 'infernal', 'primordial', 'télépathie 36m'];
        //
        // this.monster.traits = [
        //     {title: 'Amphibie', description: 'Le kraken peut respirer à l\'air libre et sous l\'eau.'},
        //     {title: 'Liberté de mouvement', description: 'Le kraken ignore les terrains difficiles. De plus, les effets magiques ne peuvent réduire sa vitesse ou l\'entraver. Il peut dépenser 1,50 mètre de son déplacement pour échapper à des entraves non-magiques ou pour ne pas être empoigné.'},
        //     {title: 'Monstre assiégeur', description: 'Le kraken inflige des dégâts doublés aux objets et aux structures.'}
        // ];
        // this.monster.actions = [
        //     {title: 'Attaques multiples', description: 'Le kraken effectue trois attaques de tentacule et peut remplacer l\'une d\'elles par une utilisation de Projection.'},
        //     {title: 'Tentacule', description: 'Attaque d\'arme au corps à corps : +17 pour toucher, allonge 9 m, une cible.\n' +
        //             'Touché : 20 (3d6+10) dégâts contondants, et la cible est empoignée (évasion DD 18). La cible est entravée jusqu\'au terme de cette empoignade. Le kraken possède dix tentacules qui peuvent chacun empoigner une cible.'},
        //     {title: 'Projection', description: 'Un objet tenu ou une créature empoignée par le kraken, de taille G ou plus petit, est projeté à une distance maximale de 18 mètres dans une direction aléatoire. L\'objet ou la créature se retrouve ensuite à terre. Si une cible lancée entre en collision avec une surface solide, elle subit 3 (1d6) dégâts contondants par tranche de 3 mètres parcourus depuis l\'emplacement où elle a été projetée. Si la cible atterrit sur une autre créature, cette dernière doit réussir un jet de sauvegarde de Dextérité DD 18 pour ne pas subir les mêmes dégâts et se retrouver à terre.'},
        // ];
        // // this.monster.legendaryActions;
        // // this.monster.reactions;
        // // this.monster.limitedActions;
        // // this.monster.gear;
        //
        // const json = jsonConvert.serialize(this.monster);
        // console.log(json);
        // console.log(jsonConvert.deserialize<Monster>(json, Monster));
    }

    public toggleSidebar(): void {
        this.sidebarOpened = !this.sidebarOpened;
    }

    public save(): void {
        this.monsterLibrary.flush();
    }

}
