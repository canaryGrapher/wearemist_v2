window.onload = function () {
    typeWriter();
    loadBrowser();
    document.getElementById("command1").focus();
    document.getElementById("accessIdentifier").innerHTML = `guest@wearemist:<span class="accessIndicator">~$</span>`;
};

var txtcounter = 0;
var txt = "Manipal Information Security Team - version - Stable-Version_3.0.9-def:24.09.2020 ©2020 MIST, Manipal. All rights reserved.";
var speed = 5;

function typeWriter() {
    if (txtcounter < txt.length) {
        document.getElementById("terminalMessage").innerHTML += txt.charAt(txtcounter);
        txtcounter++;
        setTimeout(typeWriter, speed);
    }
}
function exitTerminal() {
    window.location.assign("https://wearemist.in/");
}

async function loadBrowser() {
    let res = await fetch(`https://api.wearemist.in/geekpage/getIP`); 
    recievedData = await res.text();
    document.getElementById("terminalTitle").innerHTML = `${recievedData}@wearemist.in`;
}

async function loadCCdata() {
    let res = await fetch(`https://api.wearemist.in/geekpage/getCCdata`);
    recievedCCData = await res.json();
    return recievedCCData; 
}

async function loadMCdata() {
    let res = await fetch(`https://api.wearemist.in/geekpage/getMCdata`);
    recievedMCData = await res.json();
    return recievedMCData;
}

async function loadWCdata() {
    let res = await fetch(`https://api.wearemist.in/geekpage/getWCdata`);
    recievedWCData = await res.json();
    return recievedWCData;
}

async function loadNewsdata() {
    let res = await fetch(`https://api.wearemist.in/geekpage/getTopNews`);
    recievedNewsData = await res.json();
    return recievedNewsData;
}

async function loadClubNewsdata() {
    let res = await fetch(`https://api.wearemist.in/geekpage/getClubNews`);
    recievedClubNewsData = await res.json();
    return recievedClubNewsData;
}

var i = 1;
// Execute a function when the user releases a key on the keyboard
async function handleEnter(e) {
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == '13') {
        var userInputCommand = document.getElementById(`command${i}`).value;
        var commandIndi = userInputCommand.split(" ");
        console.log(`Processing command "${userInputCommand}"`);
        var first = commandIndi[0];
        var second = commandIndi[1];
        var third = commandIndi[2];
        document.getElementById(`command${i}`).style.display = "none";
        document.getElementById(`commandStore${i}`).style.display = "inherit";
        document.getElementById(`commandStore${i}`).innerHTML = userInputCommand;
        var itm = document.getElementById("accessPanel").lastChild;
        var cln = itm.cloneNode(true);
        document.getElementById("accessPanel").appendChild(cln);
        if (userInputCommand.trim() == "ls") {
            document.getElementById(`commandOutput${i}`).innerHTML = `<pre class="file" style="padding-bottom: 20px;">about    news    team    announcements</pre>`;
            addCommand();
        }

        else if (userInputCommand == "exit") {
            exitTerminal();
        }

        else if (first == "loadgui") {
            if (third == null && second != null) {
                if (second.toLowerCase() == "news") {
                    window.location.assign("https://wearemist.in/news");
                }
                else if (second.toLowerCase() == "team") {
                    window.location.assign("https://wearemist.in/team");
                }
                else if (second.toLowerCase() == "home") {
                    window.location.assign("https://wearemist.in/home");
                }
                else if (second.toLowerCase() == "credits") {
                    window.location.assign("https://wearemist.in/credits");
                }
                else if (second.toLowerCase() == "announcements") {
                    window.location.assign("https://wearemist.in/announcements");
                }

                else if (second == "-h" || second == "-H") {
                    document.getElementById(`commandOutput${i}`).innerHTML = `List of graphical destinations [destination] -<table style="padding-bottom: 20px;"><tr><td class="pr-5">news</td><td class="commandDescription">News page</td></tr><tr><td class="pr-5">announcements</td><td class="commandDescription">Announcement page</td></tr><tr class="pr-5"><td>home</td><td class="commandDescription">Home page of GUI mode</td></tr><tr><td class="pr-5">team</td><td class="commandDescription">Team page</td></tr><tr><td class="pr-5">credits</td><td class="commandDescription">Credits page</td></tr></table>`;
                    addCommand();
                }
                else if(second == null) {
                    
                }
                else {
                    document.getElementById(`commandOutput${i}`).innerHTML = `Could not find graphical location '${second}' |  <br />USAGE: loadgui [destination]<br>Use 'loadgui -h' for info`;
                    addCommand();
                }
            }
            else {
                document.getElementById(`commandOutput${i}`).innerHTML = `Illegal use of 'loadgui' <br> USAGE: loadgui [destination] <br>use 'loadgui -h' for info`;
                addCommand();
            }
        }

        else if (first == "cat") {
            if (third == null) {
                if (second == "team") {
                    //making CoreComm array
                    let cc = `<span class="teamHeading">Board</span><br><div class="teamViewer">`;
                    const ccArray = await loadCCdata();
                    ccArray.forEach(element => {
                        cc = cc + `<div class="teamMember" id="${element._id}">` + element.name + "</div>" + " ";
                    });
                    //making ManComm array
                    let mc = `<span class="teamHeading">Management Committee</span><br><div class="teamViewer">`;
                    const mcArray = await loadMCdata();
                    mcArray.forEach(element => {
                        mc = mc + `<div class="teamMember">` + element.name + "</div>" + " ";
                    });
                    //making WorkComm array
                    let wc = `<span class="teamHeading">Working Committee</span><br><div class="teamViewer">`;
                    const wcArray = await loadWCdata();
                    wcArray.forEach(element => {
                        wc = wc + `<div class="teamMember">` + element.name + "</div>" + " ";
                    });
                    document.getElementById(`commandOutput${i}`).innerHTML = `<div class="teamContainer"><div class="team">${cc}</div></div><div class="team">${mc}</div></div><div class="team">${wc}</div></div></div>`;
                    addCommand();
                }
                else if (second == "news") {
                    let news = `<span class="newsHeading" id="newsMessage">Recent news</span><br>`;
                    const newsArray = await loadNewsdata();
                    newsArray.forEach((item) => {
                        news = news + item.newsHeading + "<br /><br />";
                    })
                    document.getElementById(`commandOutput${i}`).innerHTML = `${news}`;
                    addCommand();
                }
                else if (second == "about") {
                    document.getElementById(`commandOutput${i}`).innerHTML = `We are a team of Information and Network Security enthusiasts who
                have gathered knowledge about the field through workshops, online
                courses, books and research. We now want to spread the knowledge we
                have gained to other students with an interest in this ever-growing
                area of computer science. We want to ensure that students approach
                this field the right way and to provide them with a platform to
                enhance and practice their skills in the same.<br>We are committed to spreading awareness about the increasing need
                for Information and Network Security. We plan to train other
                like-minded students to enhance their skills and aptitude in this
                field.<br><br>`;
                    addCommand();
                }
                else if (second == "announcements") {
                    let cNews = `<span class="newsHeading" id="newsMessage">Club Announcements</span><br>`;
                    const clubNewsArray = await loadClubNewsdata();
                    clubNewsArray.forEach((club) => {
                        cNews = cNews + "<span class='accessName'>" + club.heading + "</span>" + "<br />" + club.content + "<br /><br />";
                    })
                    document.getElementById(`commandOutput${i}`).innerHTML = `${cNews}`;
                    addCommand();
                }
                else if (second == null) {
                    document.getElementById(`commandOutput${i}`).innerHTML = "Illegal use of 'cat'<br> USAGE: cat [FILENAME]";
                    addCommand();
                }
                else {
                    document.getElementById(`commandOutput${i}`).innerHTML = `No such file found: "${second}"`;
                    addCommand();
                }
            }
            else {
                document.getElementById(`commandOutput${i}`).innerHTML = `Illegal use of 'cat' <br> USAGE: cat [FILENAME]`;
                addCommand();
            }
        }

        else if (userInputCommand == "pwd") {
            document.getElementById(`commandOutput${i}`).innerHTML = `${window.location.href}`;
            addCommand();
        }
        else if (userInputCommand == "date") {
            let dateToday = new Date();
            document.getElementById(`commandOutput${i}`).innerHTML = `${dateToday}<br>`;
            addCommand();
        }

        else if (userInputCommand == "time") {
            let timeNow = new Date();
            document.getElementById(`commandOutput${i}`).innerHTML = `The current time is: ${timeNow.getHours()}:${timeNow.getMinutes()}:${timeNow.getSeconds()}<br>`;
            addCommand();
        }

        else if (userInputCommand == "help") {
            document.getElementById(`commandOutput${i}`).innerHTML = `List of available commands:<br><div id="availableCommands"><div class="commandIs">ls</div><div class="commandIs">cat</div><div class="commandIs">clear</div><div class="commandIs">date</div><div class="commandIs">time</div><div class="commandIs">help</div><div class="commandIs">whoami</div><div class="commandIs">man</div><div class="commandIs">pwd</div><div class="commandIs">loadgui</div><div class="commandIs">exit</div></div><br>`;
            addCommand();
        }

        else if (userInputCommand == "whoami") {
            document.getElementById(`commandOutput${i}`).innerHTML = `${recievedData}`;
            addCommand();
        }
        else if (userInputCommand.trim() == "") {
            console.log("No command Input");
            addCommand();
        }

        else if (userInputCommand == "clear") {
            window.location.reload(false);
        }

        else if (userInputCommand == "man") {
            var manualPage = `<table><tr><td>ls</th><td class="commandDescription">: List files</th> </tr><tr><td>cat [filename]</td>
              <td class="commandDescription">: Show file contents</td></tr><tr><td>clear</td><td class="commandDescription">: Refresh screen</td>
            </tr><tr><td>date</td><td class="commandDescription">: Print date and time</td></tr><tr><td>time</td><td class="commandDescription">: Print full time</td></tr><tr><td>help</td><td class="commandDescription">: Available commands</td>
            </tr><tr><td>whoami</td><td class="commandDescription">: Display IP Address</td></tr><tr><td>man</td><td class="commandDescription">: Command help</td>
            </tr><tr><td>pwd</td><td class="commandDescription">: Current location</td></tr>
            <tr><td>loadgui [destination]</td><td class="commandDescription">: Go to graphical page</td></tr>
            <tr><td>exit</td><td class="commandDescription">: Previous page</td>
            </tr></table><br>`;
            document.getElementById(`commandOutput${i}`).innerHTML = `${manualPage}`;
            addCommand();
        }

        else {
            document.getElementById(`commandOutput${i}`).innerHTML = `sh: "${userInputCommand}": not found<br><br>Try typing "help" or "man" if you are lost<br><br>`;
            addCommand();
        }
        document.getElementById(`commandOutput${i}`).classList.add("commandOutput");
    }
}


async function addCommand() {
    i = i + 1;
    var addHTML = `<div class="commandInstance" id="accessPane${i}"><div class="access"><div class="accessName"><p>guest@wearemist:<span class="accessIndicator">~$</span></p>
        </div><input type="text" name="command" class="app-control" id="command${i}" autocomplete="off"autocapitalize="off" autocorrect="off">
        <p class="commandStore" id="commandStore${i}"></p></div><p class="commandOutput" id="commandOutput${i}"></p></div>`;
    var duplicatorSelector = document.getElementById("terminalArea");
    duplicatorSelector.innerHTML += addHTML;
    document.getElementById(`command${i}`).focus();
}