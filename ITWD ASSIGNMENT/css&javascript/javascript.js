function GenPlan(){
    let planName = document.getElementById("enterPlanName").value;
    let planObj = document.getElementById("planGoal").value;
    let plan1stIssue = document.getElementById("1stPlanIssue").value;
    let plan2ndIssue  = document.getElementById("2ndplanIssue").value;
    let plan3rdIssue  = document.getElementById("3rdplanIssue").value;
    let planCheckpoints = document.getElementById("planMilestones").value;
    let planDate = document.getElementById("planDate").value;
    let currentDate = Date();
    let mandFields = [planName,planObj,plan1stIssue,planCheckpoints];
    let arrayOutput = mandFields.indexOf("");
    if (arrayOutput == -1 && currentDate == null){
        document.getElementById("firstScreen").style.display="none";
        document.getElementById("secondScreen").style.display="block";
        document.getElementById("planSubject").innerHTML = planName;
        document.getElementById("planGoalOutput").innerHTML = planObj;
        document.getElementById("planList1stOutput").innerHTML = plan1stIssue;
        document.getElementById("planList2ndOutput").innerHTML = plan2ndIssue;
        document.getElementById("planList3rdOutput").innerHTML = plan3rdIssue;
        document.getElementById("planMilestonesOutput").innerHTML = planCheckpoints;
        document.getElementById("planFinishDate").innerHTML = planDate;
        document.getElementById("planCreationDate").innerHTML = currentDate;
        document.getElementById("firstScreen").style.display="none";
        document.getElementById("secondScreen").style.display="block";
    } else{
        document.getElementById("planError").innerHTML="MANDATORY FIELDS ARE LEFT EMPTY";
    }
    
    
    
}

function EditPlan(){
    document.getElementById("secondScreen").style.display="none";
    document.getElementById("firstScreen").style.display="block";
}

