import { HeroesComponent } from "./heroes.component";
import { of } from "rxjs";

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let HEROES;
  let mockHeroService;

  beforeEach(() => {
    HEROES = [
      {id: 1, name: 'Spider Dude', strength: 8},
      {id: 2, name: 'Wonder Woman', strength: 24},
      {id: 3, name: 'SuerMam', strength: 55},
    ];

    mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero'])

    component = new HeroesComponent(mockHeroService);
  })

  describe('delete', () => {
    it('should remove the indicated hero from the heroes list', () => {
      // this line creates a simple observable using the rxjs of operator
      // and all we care about is that it returns a value; for our isolated 
      // testing environment again, we aren't testing the functionalility of the
      // service, just the functinoality that we need to get our value
      mockHeroService.deleteHero.and.returnValue(of(true));
      component.heroes = HEROES;

      component.delete(HEROES[2]);

      expect(component.heroes.length).toBe(2);
    })
  })
})