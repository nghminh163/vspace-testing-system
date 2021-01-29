import { Container } from "unstated";

class AppContainer extends Container {
  state = {
    reviewed: false,
    test_skill: null,
    done_skills: [],
  };

  async goToTest() {
    await this.setState({ reviewed: true });
  }

  async setSkill(type) {
    await this.setState({
      test_skill: type,
    });
  }

  async doneSkill() {
    await this.setState((state) => ({
      done_skills: [...state.done_skills, state.test_skill],
      test_skill: null,
    }));
  }
}

export default new AppContainer();
