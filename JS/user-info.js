//function for setting the local storage system.
function setLocalMemory(objectName) {
    localStorage.setItem('personalizedSkills', JSON.stringify(objectName));
}
function getLocalMemory() {
    const roadmap = JSON.parse(localStorage.getItem('personalizedSkills')) || {};
    return roadmap;
}
function setuserProgress(progress) {
    localStorage.setItem('userProgress', JSON.stringify(progress));
}
function getuserProgress() {
    return JSON.parse(localStorage.getItem('userProgress')) || null;
}

const isOldUser = getLocalMemory();

let UserRoadMap = [];
//Landing Page Code
const getStartedBtn = document.querySelector('.start-jrny-btn');
const landingPage = document.querySelector('.landing-page')
const chooseAimPage = document.querySelector('.job-selection-page');
const skillsDeclarationpage = document.querySelector('.skills-declaration-page');
const roadMapPage = document.querySelector('.roadmap-display-page');
const roadmapContainer = document.querySelector('.roadmap-container');
const proceedBtn = document.querySelector('.proceed-btn');
function loadLandingPage() {
    landingPage.style.opacity = '0';
    setTimeout(() => {
        landingPage.style.opacity = '1';
    }, 400)
}
loadLandingPage();
function hideallSections() {
    setTimeout(() => {
        landingPage.classList.add('display_none');
    }, 500);
    landingPage.style.opacity = '0';
    chooseAimPage.classList.add('display_none')
    skillsDeclarationpage.classList.add('display_none');
}


function delayDisplay(button, page) {
    button.addEventListener('click', (e) => {
        hideallSections();
        page.classList.remove('display_none');
        setTimeout(() => {
            page.style.opacity = '1';
        }, 500);

    });
}
// delayDisplay(getStartedBtn, chooseAimPage);

//function for handling job role clicks!
const softwareEngineerRole = document.querySelector('.sft-eng');
const AIEngineerRole = document.querySelector('.ai-eng');
const MLengineerRole = document.querySelector('.ml-eng');
const dataEngineerRole = document.querySelector('.dta-eng');
const cloudengineerRole = document.querySelector('.cld-eng');
const fullstackEngineerRole = document.querySelector('.fs-eng');
const devopsengineerRole = document.querySelector('.dvops-eng');
const QAengineerRole = document.querySelector('.qa-eng');
const dbengineerRole = document.querySelector('.db-eng');
const SystemAnalystrRole = document.querySelector('.sstm-anlst-eng');
const cybersecurityEngineerRole = document.querySelector('.cbr-scrty');
const dataanalystrRole = document.querySelector('.dta-anlst');
const datascientistRole = document.querySelector('.dta-sntst');
const frontendEngineerRole = document.querySelector('.fe-eng');
const backendEngineerRole = document.querySelector('.be-eng');
const pythondevRole = document.querySelector('.py-dev');
const javadevEngineerRole = document.querySelector('.jva-fs');
const promptEngineerRole = document.querySelector('.ai-prmpt-eng');
const roleTitle = document.querySelector('.role-title');
const skillContainer = document.querySelector('.user-position');
const assmntStatus = document.querySelector('.assmnt-status');




//roadmap info essentials
const roleName = document.querySelector('.role-name')
const lrncount = document.querySelector('.lrn-count');
const dvlpcount = document.querySelector('.dvlp-count');
const strngcount = document.querySelector('.strng-count');
const allskillsCount = document.querySelector('.all-skills-count');

const leanringSkills = document.querySelector('.skills-lrn');
const developingSkills = document.querySelector('.skills-dvlp');
const strongSkills = document.querySelector('.skills-strng');


//Roadmap page essentials..
const homePage = document.querySelector('.home-page');
const learningPage = document.querySelector('.learning-page');
const buildingPage = document.querySelector('.building-page');
const progressPage = document.querySelector('.progress-page');
const profilePage = document.querySelector('.profile-page');

const hometBtn = document.querySelector('.home-btn');
const learnBtn = document.querySelector('.learn-btn');
const buildBtn = document.querySelector('.build-btn');
const progressBtn = document.querySelector('.progress-btn');
const profileBtn = document.querySelector('.profile-btn');

const learningPageTaskInfo = document.querySelector('.learning-task-info');
const rsrcsPage = document.querySelector('.topics-container');
const projectsPage = document.querySelector('.projects-container');



//function for creating a link for skills
let selectedCareer = null;
let userSkills = {};
const s_learningSkills = [];
const s_developingSkills = [];
const s_strongSkills = [];
let userProgress = {};

function categorizeSkills(skills) {
    Object.keys(skills).forEach(skill => {
        const level = skills[skill]
        if (level === 'beginner') {
            s_learningSkills.push(skill);
        } else if (level === 'intermediate') {
            s_developingSkills.push(skill)
        } else if (level === 'advanced') {
            s_strongSkills.push(skill);
        }

    });
}
function displaySKills() {
    displaySkillGroups(s_learningSkills, leanringSkills);
    displaySkillGroups(s_developingSkills, developingSkills);
    displaySkillGroups(s_strongSkills, strongSkills);

    if (s_learningSkills.length > 0) {
        leanringSkills.classList.remove('display_none');


    }
    if (s_developingSkills.length > 0) {
        developingSkills.classList.remove('display_none');

    }
    if (s_strongSkills.length > 0) {
        strongSkills.classList.remove('display_none');

    }

}
function displaySkillGroups(skills, container) {
    skills.forEach(skill => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        const rsrcBox = document.createElement('div');
        rsrcBox.className = 'rsrc-box';
        const videoBtn = document.createElement('button');
        videoBtn.className = 'video-btn';
        videoBtn.textContent = `Video tutorial for ${skill}`;
        const notesBtn = document.createElement('button');
        notesBtn.className = 'notes-btn';
        notesBtn.textContent = `Notes for ${skill}`;
        rsrcBox.append(videoBtn, notesBtn);
        const topicsBtn = document.createElement('button');
        topicsBtn.classList = 'topics-btn';
        topicsBtn.textContent = 'Reveal Topics'
        const skillTitle = document.createElement('p');
        skillTitle.className = 'infobox';
        skillTitle.textContent = `${skill}`;
        courseCard.append(skillTitle, rsrcBox, topicsBtn);
        container.append(courseCard);
        
        // logic for opening respective vedio on youtube
        videoBtn.onclick = () => {
            const videoName = videoBtn.textContent.replace('Video tutorial for', '').toLowerCase().trim();
            window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(videoName)}`, "_blank")
        }
        
        //logic for opening the respective notes on GreeksforGreeks
        notesBtn.onclick = () => {
            window.open(`https://www.geeksforgeeks.org/search/?gq=${notesBtn.textContent.replace('Notes for', '').toLowerCase()}`, "_blank");
        }
        
        topicsBtn.addEventListener('click', (e) => {

            projectsPage.innerHTML = `<h4 class='dflt-prjct-hdng'>You Need To Build These...</h4><br>`;

            const clickedSkill = skillTitle.textContent;

            const level = userSkills[clickedSkill];

            if (level === 'beginner') {
                rsrcsPage.innerHTML = `<h4 class='dflt-rsrc-hdng'>You Need To Learn..</h4><br>`;
            } else if (level === 'intermediate') {
                rsrcsPage.innerHTML = `<h4 class='dflt-rsrc-hdng'>You Need To Develop..</h4><br>`;
            } else if (level === 'advanced') {
                rsrcsPage.innerHTML = `<h4 class='dflt-rsrc-hdng'>You Need To Master..</h4><br>`;

            }

            openLearningPage(clickedSkill);
            const skillTopics = skillLearningData[clickedSkill][level].topics;
            const skillProjects = skillLearningData[clickedSkill][level].projects;

            skillTopics.forEach(eachSkill => {
                const type = 'topic'
                createskillBox(eachSkill, rsrcsPage, clickedSkill, type);
            });
            skillProjects.forEach(eachProject => {
                const type = 'project'
                createskillBox(eachProject, projectsPage, clickedSkill, type);
            });
        });
    });
}
function displaySkillsCount() {
    const learningskillsCount = s_learningSkills.length;
    const developingskillsCount = s_developingSkills.length;
    const strongskillsCount = s_strongSkills.length;
    const userSkillsCounter = developingskillsCount + strongskillsCount;


    allskillsCount.innerHTML = `<p>
            You have ${userSkillsCounter} skills of ${Object.keys(userSkills).length} skills</p>`;

    lrncount.innerHTML = `
            <p>${learningskillsCount}<br>Skills to learn</p>`;
    dvlpcount.innerHTML = `
            <p>${developingskillsCount}<br>Skills to develop</p>`;
    strngcount.innerHTML = `
            <p>${strongskillsCount}<br>Stronger skills</p>`;


}
function openLearningPage(skill) {
    const Skill_level = userSkills[skill];
    homePage.style.opacity = '0';
    hideroadmapSections(learningPage);
    learningPageTaskInfo.innerHTML = `
    <h3>Your Task : ${skill}</h3><br>
    <h3>Your Level : ${Skill_level}</h3><br><hr>`;

    return;
}

function createuserProgress() {
    const savedProgress = getuserProgress();
    if (savedProgress) {
        userProgress = savedProgress;
        return;
    }
    Object.keys(userSkills).forEach(skill => {
        userProgress[skill] = {
            completedTopics: [],
            completedProjects: []
        }
    });

    setuserProgress(userProgress);
}

function createskillBox(eachSkill, appendTo, skill, type) {
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.dataset.Childtopic = eachSkill;
    checkBox.dataset.Parenttopic = skill;
    checkBox.title = 'Mark as complete ?';
    const skilltitle = document.createElement('p');
    skilltitle.textContent = ` 👉 ${eachSkill}`;
    const skillHolder = document.createElement('div');
    skillHolder.className = 'skill-holder';
    skillHolder.append(checkBox, skilltitle);

    appendTo.append(skillHolder);


    checkBox.addEventListener('change', (e) => {
        const childTopic = checkBox.dataset.Childtopic;
        const parentTopic = checkBox.dataset.Parenttopic;

        if (checkBox.checked) {
            checkBox.title = 'Mark as incomplete ?'
            if (type === 'topic') {
                if (userProgress[parentTopic].completedTopics.includes(childTopic)) {
                    alert('Already Exists');
                    return;
                }
                userProgress[parentTopic].completedTopics.push(childTopic);
            } else if (type === 'project') {
                if (userProgress[parentTopic].completedProjects.includes(childTopic)) {
                    alert('Already Done!');
                    return
                }
                userProgress[parentTopic].completedProjects.push(childTopic);
            }
        } else {
            checkBox.title = 'Mark as complete?'
            if (type === 'topic') {
                userProgress[parentTopic].completedTopics = userProgress[parentTopic].completedTopics.filter(topic => {
                    return topic !== childTopic
                })
            } else if (type === 'project') {
                userProgress[parentTopic].completedProjects = userProgress[parentTopic].completedProjects.filter(project => {
                    return project !== childTopic;
                });
                console.log(userProgress[parentTopic].completedProjects);
            }


        }
        setuserProgress(userProgress);
        calculateProgressCount();
    });


    const savedProgress = getuserProgress();

    if (type === 'topic') {
        checkBox.checked = savedProgress[skill].completedTopics.includes(eachSkill);
    }
    if (type === 'project') {
        checkBox.checked = savedProgress[skill].completedProjects.includes(eachSkill);
    }



}


function hideroadmapSections(onlyShow) {
    learningPage.classList.add('display_none');
    buildingPage.classList.add('display_none');
    progressPage.classList.add('display_none');
    homePage.style.opacity = '0';
    onlyShow.classList.remove('display_none');
    setTimeout(() => {
        homePage.classList.add('display_none');
        onlyShow.style.opacity = '1';
    }, 400);
}

if (isOldUser.role_id) {
    userSkills = isOldUser.role_skills;
    categorizeSkills(userSkills);
    roleName.textContent = `Hello, Aspired ${isOldUser.role_name}`;

    delayDisplay(getStartedBtn, roadMapPage);
    displaySKills()
    displaySkillsCount();
    createuserProgress()


} else {
    delayDisplay(getStartedBtn, chooseAimPage);

    function openjobRole(button) {
        button.addEventListener('click', (e) => {
            chooseAimPage.style.opacity = '0';
            setTimeout(() => {
                hideallSections();
                skillsDeclarationpage.classList.remove('display_none');
            }, 500);
            skillsDeclarationpage.style.opacity = '1';
            const selectedRoleId = button.dataset.careerId;
            const selectedRole = careerData.find((each_role) => {
                return each_role.id === selectedRoleId;
            });

            document.querySelector('.role-title').textContent = `Hello Aspired..${selectedRole.role}`;
            const selectedRoleSKills = selectedRole.skills;

            skillContainer.innerHTML = '';

            selectedRoleSKills.forEach((skill) => {
                const skillBox = document.createElement('div');
                skillBox.classList.add('role-box');
                skillBox.innerHTML += `
            <h4>How comfortable are you with ${skill} skill..?</h4>
            <div class='optionsBox'>
            <button data-level='beginner'>Beginner</button>
            <button data-level='intermediate'>Intermediate</button>
            <button data-level='advanced'>Advanced</button>
            </div>`;

                skillContainer.append(skillBox);

                const levelButtons = skillBox.querySelectorAll('.optionsBox button');
                levelButtons.forEach(eachSkillLevel => {

                    eachSkillLevel.addEventListener('click', (e) => {
                        const selectedLevel = eachSkillLevel.dataset.level;
                        userSkills[skill] = selectedLevel;
                        const answeredSkills = Object.keys(userSkills).length

                        assmntStatus.textContent = `Answered : ${answeredSkills} / ${selectedRoleSKills.length} Skills`
                        levelButtons.forEach(button => {
                            button.classList.remove('selected-level');

                        });
                        eachSkillLevel.classList.add('selected-level');
                        if (answeredSkills === selectedRoleSKills.length) {
                            proceedBtn.classList.remove('display_none');
                        }


                    });

                })
            });

            proceedBtn.onclick = (e) => {
                skillsDeclarationpage.style.opacity = '0';

                setTimeout(() => {
                    hideallSections();
                    roadMapPage.style.opacity = '1';
                }, 600);

                roadMapPage.classList.remove('display_none');
                roleName.textContent = selectedRole.role;

                categorizeSkills(userSkills);
                displaySKills();
                displaySkillsCount();
                createuserProgress();
                const userWholeSkillsData = {
                    role_id: selectedRole.id,
                    role_name: selectedRole.role,
                    role_skills: userSkills
                }

                setLocalMemory(userWholeSkillsData);
                console.log(getLocalMemory());
            }

        });

    };


    openjobRole(softwareEngineerRole);
    openjobRole(AIEngineerRole);
    openjobRole(fullstackEngineerRole);
    openjobRole(cybersecurityEngineerRole);
    openjobRole(dataanalystrRole);
    openjobRole(datascientistRole);
    openjobRole(frontendEngineerRole);
    openjobRole(backendEngineerRole);
    openjobRole(pythondevRole);
    openjobRole(javadevEngineerRole);
    openjobRole(MLengineerRole);
    openjobRole(dataEngineerRole)
    openjobRole(dbengineerRole);
    openjobRole(QAengineerRole);
    openjobRole(SystemAnalystrRole);
    openjobRole(devopsengineerRole);
    openjobRole(cloudengineerRole);
    openjobRole(promptEngineerRole);
}
