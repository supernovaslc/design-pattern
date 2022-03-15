class TeamMemberView {
      printTeamMemberDetails(memberName, memberRoll) {
            console.log(`Team Member:\n  Name: ${memberName}\n  Roll: ${memberRoll}`);
      }
}
//MVC App
class MVCApp {
      render() {
            const model = new TeamMember("Quang", "Huy");
            const view = new TeamMemberView();
            const controller = new TeamMemberController(model, view);

            controller.updateView();
            controller.setMemberName("Quang");
            controller.setMemberRoll("Huy");
            controller.updateView();
      }
}

//Main
const app = new MVCApp();
app.render();