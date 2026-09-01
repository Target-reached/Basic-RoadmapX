const logOutBtn = document.querySelector('.log-out');

function hideallNavpages() {
    homePage.classList.add('display_none');
    learningPage.classList.add('display_none');
    buildingPage.classList.add('display_none');
    progressPage.classList.add('display_none');
    profilePage.classList.add('display_none');
}

function displaynavPage(button, page) {
    button.addEventListener('click', (e) => {
        hideallNavpages();
        setTimeout(() => {
            page.style.opacity = '1';
        }, 300);

        page.classList.remove('display_none');
    });


}
displaynavPage(hometBtn, homePage);
displaynavPage(learnBtn, learningPage);
displaynavPage(buildBtn, buildingPage);
displaynavPage(progressBtn, progressPage);
displaynavPage(profileBtn, profilePage);

logOutBtn.onclick = () => {
    const confirmLogout = confirm('All your progress and roadmap personalizations will be wiped!');
    if (confirmLogout) {
        localStorage.clear();
        window.location.reload();
    } else {
        return;
    }
};
const topicsCount = document.querySelector('.topics-count');
const projectsCount = document.querySelector('.projects-count');
const showTopicsPerc = document.querySelector('.t-inner-circle');
const showProjectsPerc = document.querySelector('.p-inner-circle');
const topicsOuterCircle = document.querySelector('.t-outer-circle');
const projectsOuterCircle = document.querySelector('.p-outer-circle');
function calculateProgressCount() {
    let remainingTopics = 0;
    let remainingProjects = 0;
    let totalProjects = 0;
    let totalTopics = 0;

    Object.keys(userProgress).forEach(skill => {
        const level = userSkills[skill];
        const skilTotalTopics = skillLearningData[skill][level].topics.length;
        const skillTotalProjects = skillLearningData[skill][level].projects.length;

        const completedTopics = userProgress[skill].completedTopics.length;
        const completedProjects = userProgress[skill].completedProjects.length;

        totalTopics += skilTotalTopics;
        totalProjects += skillTotalProjects;

        remainingTopics += (skilTotalTopics - completedTopics);
        remainingProjects += (skillTotalProjects - completedProjects);
    });

    const completedTopics = totalTopics - remainingTopics;
    const completedProjects = totalProjects - remainingProjects;
    if (completedTopics === 0 && completedProjects === 0) {
        showProjectsPerc.textContent = `Not Started!`;
        showTopicsPerc.textContent = `Not Started!`
        topicsCount.textContent = `I'm waiting to show progress...`;
        projectsCount.textContent = `Learn skill and come here...`;
    } else {
        topicsCount.textContent = `👉 Remaining ${remainingTopics} / ${totalTopics} topics`;
        projectsCount.textContent = `👉 Remaining ${remainingProjects} / ${totalProjects} projects`;
        const topicsPercentage = (completedTopics / totalTopics) * 100;
        const projectsPercentage = (completedProjects / totalProjects) * 100;

        showTopicsPerc.textContent = `${Math.ceil(topicsPercentage)} %`;
        showProjectsPerc.textContent = `${Math.ceil(projectsPercentage)} %`;
        topicsOuterCircle.style.background = `
        conic-gradient(aqua ${topicsPercentage}%, rgb(118, 112, 112) 0%)`;
        projectsOuterCircle.style.background = `
        conic-gradient(aqua ${projectsPercentage}%, rgb(103, 99, 99) 0%)`;
    }


}
calculateProgressCount();