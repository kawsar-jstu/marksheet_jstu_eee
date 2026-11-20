/* JSTU EEE Marksheet
   Course list, credits and grading scale are taken from the JSTU EEE marksheet template. */

(function () {
  "use strict";

  // ---- Grading scale (min marks inclusive) ----
  var SCALE = [
    { letter: "A+", gp: 4.0,  min: 80, label: "80+" },
    { letter: "A",  gp: 3.75, min: 75, label: "75-80" },
    { letter: "A-", gp: 3.5,  min: 70, label: "70-75" },
    { letter: "B+", gp: 3.25, min: 65, label: "65-70" },
    { letter: "B",  gp: 3.0,  min: 60, label: "60-65" },
    { letter: "B-", gp: 2.75, min: 55, label: "55-60" },
    { letter: "C+", gp: 2.5,  min: 50, label: "50-55" },
    { letter: "C",  gp: 2.25, min: 45, label: "45-50" },
    { letter: "D",  gp: 2.0,  min: 40, label: "40-45" },
    { letter: "F",  gp: 0.0,  min: 0,  label: "<40" }
  ];

  // ---- Courses ----
  var SEMESTERS = [
    { id: "y1s1", year: 1, name: "1st Year 1st Semester", courses: [
      ["EEE 1111", "Electrical Circuit I", 3],
      ["EEE 1112", "Electrical Circuit I Sessional", 1.5],
      ["HUM 1111", "Technical and Communicative English", 3],
      ["HUM 1112", "Technical and Communicative English Sessional", 0.75],
      ["MATH 1111", "Differential and Integral Calculus", 3],
      ["PHY 1111", "Physics", 3],
      ["PHY 1112", "Physics Sessional", 0.75],
      ["CSE 1111", "Computer Programming", 3],
      ["CSE 1112", "Computer Programming Sessional", 1.5]
    ]},
    { id: "y1s2", year: 1, name: "1st Year 2nd Semester", courses: [
      ["EEE 1211", "Electrical Circuit II", 3],
      ["EEE 1212", "Electrical Circuit II Sessional", 1.5],
      ["EEE 1221", "Electronic Device and Circuit I", 3],
      ["EEE 1222", "Electronic Device and Circuit I Sessional", 1.5],
      ["HUM 1211", "Accounting and Economics", 3],
      ["MATH 1211", "Linear Algebra, Coordinate Geometry and Vector Analysis", 3],
      ["CHEM 1211", "Chemistry", 3],
      ["CE 1232", "Engineering Drawing", 1.5]
    ]},
    { id: "y2s1", year: 2, name: "2nd Year 1st Semester", courses: [
      ["EEE 2111", "Electrical Machine I", 3],
      ["EEE 2112", "Electrical Machine I Sessional", 1.5],
      ["EEE 2121", "Electronic Device and Circuit II", 3],
      ["EEE 2122", "Electronic Device and Circuit II Sessional", 1.5],
      ["ME 2111", "Basic Mechanical Engineering", 3],
      ["ME 2112", "Basic Mechanical Engineering Sessional", 0.75],
      ["MATH 2111", "Differential Equation, Laplace Transform and Fourier Analysis", 3],
      ["EEE 2113", "Engineering Materials", 3],
      ["EEE 2100", "Circuit Simulation Sessional", 1.5]
    ]},
    { id: "y2s2", year: 2, name: "2nd Year 2nd Semester", courses: [
      ["EEE 2211", "Electrical Machine II", 3],
      ["EEE 2212", "Electrical Machine II Sessional", 1.5],
      ["EEE 2231", "Digital Electronics", 3],
      ["EEE 2232", "Digital Electronics Sessional", 1.5],
      ["EEE 2241", "Computational Methods for Engineers", 3],
      ["EEE 2242", "Computational Methods for Engineers Sessional", 0.75],
      ["IPE 2211", "Industrial Management", 3],
      ["STAT 2211", "Statistics and Data Analysis", 3],
      ["EEE 2200", "Electrical and Electronic Shop Practice Sessional", 1.5]
    ]},
    { id: "y3s1", year: 3, name: "3rd Year 1st Semester", courses: [
      ["EEE 3111", "Measurement and Instrumentation", 3],
      ["EEE 3112", "Measurement and Instrumentation Sessional", 1.5],
      ["EEE 3131", "Microprocessor and Microcontroller", 3],
      ["EEE 3132", "Microprocessor and Microcontroller Sessional", 1.5],
      ["EEE 3141", "Power Electronics", 3],
      ["EEE 3142", "Power Electronics Sessional", 0.75],
      ["EEE 3151", "Signals and Linear Systems", 3],
      ["EEE 3161", "Engineering Electromagnetics", 3],
      ["EEE 3100", "Electrical Machine Design Sessional", 0.75]
    ]},
    { id: "y3s2", year: 3, name: "3rd Year 2nd Semester", courses: [
      ["EEE 3211", "Communication Engineering I", 3],
      ["EEE 3212", "Communication Engineering I Sessional", 1.5],
      ["EEE 3221", "Power System I", 3],
      ["EEE 3222", "Power System I Sessional", 0.75],
      ["EEE 3231", "Power Plant Engineering and Environmental Issues", 3],
      ["EEE 3241", "Control Systems", 3],
      ["EEE 3242", "Control Systems Sessional", 1.5],
      ["EEE 3251", "Professional Ethics and Entrepreneurship", 3],
      ["EEE 3200", "Engineering Project Design Sessional", 1.5],
      ["EEE 3240", "Technical Seminar", 0.75]
    ]},
    // A 4th element marks an elective: its code and title can be edited (the id keeps each one unique).
    { id: "y4s1", year: 4, name: "4th Year 1st Semester", courses: [
      ["EEE 4111", "Communication Engineering II", 3],
      ["EEE 4112", "Communication Engineering II Sessional", 1.5],
      ["EEE 4121", "Power System II", 3],
      ["EEE 4122", "Power System II Sessional", 0.75],
      ["EEE 4131", "Digital Signal Processing", 3],
      ["EEE 4132", "Digital Signal Processing Sessional", 0.75],
      ["EEE 4141", "Solid State Devices", 3],
      ["EEE 41XX", "Elective I", 3, "elec1"],
      ["EEE 41XX", "Sessional based on Elective I", 0.75, "elec1s"],
      ["EEE 4180", "Thesis/ Project (Part I)", 1.5],
      ["EEE 4190", "Industrial Attachment", 0.5]
    ]},
    { id: "y4s2", year: 4, name: "4th Year 2nd Semester", courses: [
      ["EEE 42XX", "Elective II", 3, "elec2"],
      ["EEE 42XX", "Elective II Sessional", 0.75, "elec2s"],
      ["EEE 4221", "Power System Protection and Switchgear", 3],
      ["EEE 4222", "Power System Protection and Switchgear Sessional", 1.5],
      ["EEE 4231", "VLSI Circuits and Design", 3],
      ["EEE 4232", "VLSI Circuits and Design Sessional", 1.5],
      ["EEE 42XX", "Elective III", 3, "elec3"],
      ["EEE 4280", "Thesis/ Project (Part II)", 3],
      ["EEE 4290", "Board Viva-voce", 0.5]
    ]}
  ];

  var STORAGE_KEY = "jstu-eee-cgpa-v2";

  // ---- Pure helpers ----
  function gradeByLetter(letter) {
    for (var i = 0; i < SCALE.length; i++) {
      if (SCALE[i].letter === letter) return SCALE[i];
    }
    return null;
  }
  function fmt2(n) { return n.toFixed(2); }

  // ---- State ----
  // state.entries[code] = { grade: "A" }   (letter for the chosen GP; empty when nothing entered)
  var state = { info: { name: "", id: "", session: "", batch: "" }, entries: {}, names: {} };

  function load() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        var parsed = JSON.parse(raw);
        if (parsed && parsed.entries) state = parsed;
        if (!state.info) state.info = { name: "", id: "", session: "", batch: "" };
        if (!state.names) state.names = {};
      }
    } catch (e) { /* storage unavailable: run without saving */ }
  }
  function save() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {}
  }

  // Result for a course entry, or null when there is no result.
  function resultFor(code) {
    var e = state.entries[code];
    if (!e || !e.grade) return null;
    return gradeByLetter(e.grade);
  }

  // Unique key of a course: electives share codes like "EEE 41XX", so they carry their own id.
  function key(c) { return c[3] || c[0]; }

  // Compute totals for a list of courses
  function compute(courses) {
    var credits = 0, points = 0, failed = 0;
    courses.forEach(function (c) {
      var g = resultFor(key(c));
      if (!g) return;
      credits += c[2];
      points += c[2] * g.gp;
      if (g.letter === "F") failed += c[2];
    });
    return { credits: credits, points: points, failed: failed, gpa: credits > 0 ? points / credits : null };
  }

  // ---- Rendering ----
  var $ = function (id) { return document.getElementById(id); };

  function buildScale() {
    var body = $("scaleBody");
    body.innerHTML = SCALE.map(function (s) {
      return "<tr><td>" + s.letter + "</td><td class='num'>" + s.gp.toFixed(2) + "</td><td class='num'>" + s.label + "</td></tr>";
    }).join("");
  }

  function gradeOptions() {
    // The person picks a grade point (GP); the grade letter is worked out from it.
    return "<option value=''>-</option>" + SCALE.map(function (s) {
      return "<option value='" + s.letter + "'>" + s.gp.toFixed(2) + "</option>";
    }).join("");
  }

  function buildSemesters() {
    var host = $("semesters");
    var opts = gradeOptions();
    host.innerHTML = SEMESTERS.map(function (sem) {
      var total = sem.courses.reduce(function (a, c) { return a + c[2]; }, 0);
      var rows = sem.courses.map(function (c) {
        var code = c[0], k = key(c);
        var codeCell = c[3]
          ? "<input type='text' class='ed' data-key='" + k + "' data-field='code' value='" + code + "' placeholder='" + code + "' aria-label='Elective course code' autocomplete='off'>"
          : code;
        var titleCell = c[3]
          ? "<input type='text' class='ed ed-title' data-key='" + k + "' data-field='title' value='" + c[1] + "' placeholder='" + c[1] + "' aria-label='Elective course name' autocomplete='off'>"
          : c[1];
        return "<tr data-code='" + k + "'>" +
          "<td class='code'>" + codeCell + "</td>" +
          "<td class='title-cell'>" + titleCell + "</td>" +
          "<td class='num'>" + fmt2(c[2]) + "</td>" +
          "<td class='num'><select class='gpsel' aria-label='Grade point for " + code + "'>" + opts + "</select></td>" +
          "<td class='lg'>-</td>" +
          "<td class='num pts'>-</td>" +
        "</tr>";
      }).join("");
      return "<section class='semester' id='sem-" + sem.id + "'>" +
        "<div class='sem-head'><h3>" + sem.name + "</h3>" +
        "<span class='meta'>GPA <span class='sgpa'>-</span> &nbsp;|&nbsp; Graded credits <span class='scred'>0.00</span></span>" +
        "<span class='sem-actions'>" +
        "<button type='button' class='pdfbtn' data-pdf='" + sem.id + "'>Download PDF</button>" +
        "<button type='button' class='clear' data-sem='" + sem.id + "'>Clear semester</button></span></div>" +
        "<div class='table-scroll'><table>" +
        "<thead><tr><th>Code</th><th>Course title</th><th class='num'>Credit</th><th class='num'>GP</th><th>Grade</th><th class='num'>Points</th></tr></thead>" +
        "<tbody>" + rows + "</tbody>" +
        "<tfoot><tr><td colspan='2'>Semester total</td><td class='num'>" + fmt2(total) + "</td><td class='sgpa2' colspan='2'>GPA -</td><td class='num spts'>0.00</td></tr></tfoot>" +
        "</table></div>" +
        "<div class='sfoot'>CGPA up to this semester: <strong class='scum'>-</strong></div>" +
        "</section>";
    }).join("");
  }

  // One-page A4 transcript: all semesters together, like an official marksheet
  function esc(t) { return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }

  function courseText(c, field) {
    var k = key(c);
    if (c[3]) {
      var n = state.names[k];
      var v = n && n[field];
      if (typeof v === "string" && v.trim()) return v;
    }
    return field === "code" ? c[0] : c[1];
  }

  function buildTranscript(semId) {
    var d = new Date();
    var info = state.info;
    var cum = { credits: 0, points: 0, failed: 0 };
    // Only semesters that have at least one result are printed (so a student with 2, 3, 4 ... semesters gets just those)
    var done = SEMESTERS.filter(function (sem) {
      return sem.courses.some(function (c) { return resultFor(key(c)); });
    });
    var one = semId ? SEMESTERS.filter(function (x) { return x.id === semId; })[0] : null;
    var shown = one ? [one] : (done.length ? done : SEMESTERS.slice(0, 1));
    var stop = false;
    var running = { credits: 0, points: 0, sems: 0 };
    var yr = {};
    var rs = SEMESTERS.map(function (x) { return compute(x.courses); });
    var blocks = SEMESTERS.map(function (sem, i) {
      if (stop) return "";
      var r = compute(sem.courses);
      var y = yr[sem.year] || (yr[sem.year] = { credits: 0, points: 0 });
      y.credits += r.credits; y.points += r.points;
      running.credits += r.credits; running.points += r.points;
      if (r.credits > 0) running.sems++;
      cum.credits += r.credits; cum.points += r.points; cum.failed += r.failed;
      if (one && sem === one) stop = true;   // single-semester PDF: CGPA counts up to this semester only
      if (shown.indexOf(sem) < 0) return "";
      var rows = sem.courses.map(function (c) {
        var g = resultFor(key(c));
        return "<tr" + (g && g.letter === "F" ? " class='f'" : "") + "><td class='cn'>" + esc(courseText(c, "code")) + "</td><td class='t'>" + esc(courseText(c, "title")) +
          "</td><td class='n'>" + fmt2(c[2]) + "</td><td class='n'>" + (g ? g.letter : "") + "</td><td class='n'>" + (g ? g.gp.toFixed(2) : "") + "</td></tr>";
      }).join("");
      var title = sem.name;
      // Rules: SGPA for every semester.
      // YGPA only on a 2nd semester, and only when that year's 1st semester also has a result.
      // CGPA when every semester from 1st Year 1st up to this one has a result (at least 2 semesters).
      var second = /2nd/.test(sem.name.split("Year")[1]);
      var yearDone = second && i > 0 && rs[i].credits > 0 && rs[i - 1].credits > 0;
      var prefixDone = rs.slice(0, i + 1).every(function (x) { return x.credits > 0; });
      var showY = yearDone;
      var showC = i >= 1 && prefixDone;
      return "<div class='tsem'><div class='sh'>" + title + "</div><table>" +
        "<thead><tr><th>Course No.</th><th class='t'>Course Title</th><th class='n'>Cr. Hr.</th><th class='n'>Grade</th><th class='n'>GP</th></tr></thead>" +
        "<tbody>" + rows + "</tbody></table>" +
        "<div class='sres'><div>SGPA: <b>" + (r.gpa === null ? "-" : fmt2(r.gpa)) + "</b></div>" +
        (showY ? "<div>YGPA: <b>" + fmt2(y.points / y.credits) + "</b></div>" : "") +
        (showC ? "<div>CGPA: <b>" + fmt2(running.points / running.credits) + "</b></div>" : "") + "</div></div>";
    }).join("");
    var lastIdx = -1;
    if (one) { lastIdx = SEMESTERS.indexOf(one); } else { rs.forEach(function (x, j) { if (x.credits > 0) lastIdx = j; }); }
    var headerCgpa = lastIdx >= 1 && rs.slice(0, lastIdx + 1).every(function (x) { return x.credits > 0; });
    var cgpa = cum.credits > 0 ? fmt2(cum.points / cum.credits) : "-";
    var scale = SCALE.map(function (s) {
      return "<tr><td>" + s.label + "</td><td>" + s.letter + "</td><td>" + s.gp.toFixed(2) + "</td></tr>";
    }).join("");
    $("transcript").className = (shown.length <= 4 ? "roomy" : "") + (one ? " single" : "");
    $("transcript").innerHTML =
      "<div class='thead'><img src='logo.png' alt=''><div><h2>Jamalpur Science &amp; Technology University</h2>" +
      "<p>Faculty of Engineering<br>Department of Electrical and Electronic Engineering</p>" +
      (one ? "<p class='semline'>B.Sc. Engg. in Electrical and Electronic Engineering &nbsp;&middot;&nbsp; " + one.name + "</p>" : "<h3>TRANSCRIPT OF ACADEMIC RECORD</h3>") +
      "</div></div>" + (one ? "<div class='rsbar'>Result Sheet</div>" : "") +
      "<div class='ttop'><div class='tinfo'>" +
      "<div><span>Name</span>: " + esc(info.name || "") + "</div>" +
      "<div><span>Student ID</span>: " + esc(info.id || "") + "</div>" +
      "<div><span>Session</span>: " + esc(info.session || "") + "</div>" +
      "<div><span>Batch</span>: " + esc(info.batch || "") + "</div>" +
      (one ? "" : "<div><span>Semesters completed</span>: " + done.length + " of " + SEMESTERS.length + "</div>") +
      "<div><span>Total credits</span>: " + fmt2(cum.credits) + (cum.failed > 0 ? " (failed " + fmt2(cum.failed) + ")" : "") + "</div>" +
      (!headerCgpa ? "" : "<div class='tcg'><span>Cumulative Grade Point Average (CGPA) earned</span>: <b>" + cgpa + "</b></div>") + "</div>" +
      "<div class='tgs'><div class='gt'>GRADING SYSTEM</div><table><tr><th>Numerical Equivalent</th><th>Letter Grade</th><th>Grade Point</th></tr>" + scale + "</table></div></div>" +
      "<div class='tgrid'>" + blocks + "</div>" +
      "<div class='tfoot'>" +
      "<div class='tlast'>Unofficial student copy &nbsp;&middot;&nbsp; Generated " + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear() + "</div></div>";
  }

  function ordinal(n) { return n === 1 ? "ST" : n === 2 ? "ND" : n === 3 ? "RD" : "TH"; }

  // Push saved state into inputs
  function fillInputs() {
    $("stName").value = state.info.name || "";
    $("stId").value = state.info.id || "";
    $("stSession").value = state.info.session || "";
    $("stBatch").value = state.info.batch || "";

    document.querySelectorAll("tr[data-code]").forEach(function (tr) {
      var e = state.entries[tr.getAttribute("data-code")] || { grade: "" };
      tr.querySelector(".gpsel").value = e.grade || "";
    });

    // Saved names for electives (empty means "use the default text")
    document.querySelectorAll(".ed").forEach(function (inp) {
      var n = state.names[inp.getAttribute("data-key")];
      var v = n && n[inp.getAttribute("data-field")];
      if (typeof v === "string") inp.value = v;
    });
  }

  function classOf(cgpa) {
    // Display hint only; official classification rules may differ.
    if (cgpa >= 3.75) return "Outstanding range (3.75+)";
    if (cgpa >= 3.5) return "Excellent range (3.50+)";
    if (cgpa >= 3.0) return "Very good range (3.00+)";
    if (cgpa >= 2.5) return "Good range (2.50+)";
    if (cgpa >= 2.0) return "Satisfactory range (2.00+)";
    return "Below 2.00";
  }

  function refresh() {
    // Row-level display
    document.querySelectorAll("tr[data-code]").forEach(function (tr) {
      var code = tr.getAttribute("data-code");
      var g = resultFor(code);
      var credit = parseFloat(tr.children[2].textContent);
      tr.querySelector(".lg").textContent = g ? g.letter : "-";
      tr.querySelector(".pts").textContent = g ? fmt2(credit * g.gp) : "-";
      tr.classList.toggle("fail", !!g && g.letter === "F");
    });

    // Semester-level display
    var summaryRows = [];
    var yearAgg = {};
    var all = { credits: 0, points: 0, failed: 0 };

    SEMESTERS.forEach(function (sem) {
      var r = compute(sem.courses);
      var box = $("sem-" + sem.id);
      box.querySelector(".sgpa").textContent = r.gpa === null ? "-" : fmt2(r.gpa);
      box.querySelector(".scred").textContent = fmt2(r.credits);
      box.querySelector(".sgpa2").textContent = "GPA " + (r.gpa === null ? "-" : fmt2(r.gpa));
      box.querySelector(".spts").textContent = fmt2(r.points);

      summaryRows.push("<tr><td>" + sem.name + "</td><td class='num'>" + fmt2(r.credits) + "</td><td class='num'>" +
        (r.gpa === null ? "-" : fmt2(r.gpa)) + "</td><td class='num'>" + fmt2(r.points) + "</td></tr>");

      var y = yearAgg[sem.year] || (yearAgg[sem.year] = { credits: 0, points: 0 });
      y.credits += r.credits;
      y.points += r.points;
      all.credits += r.credits;
      all.points += r.points;
      all.failed += r.failed;
      box.querySelector(".scum").textContent = all.credits > 0 ? fmt2(all.points / all.credits) : "-";

      // After the 2nd semester of a year, add the year row
      var next = SEMESTERS[SEMESTERS.indexOf(sem) + 1];
      if (!next || next.year !== sem.year) {
        summaryRows.push("<tr class='year'><td>Year " + sem.year + " total</td><td class='num'>" + fmt2(y.credits) +
          "</td><td class='num'>" + (y.credits > 0 ? fmt2(y.points / y.credits) : "-") + "</td><td class='num'>" + fmt2(y.points) + "</td></tr>");
      }
    });

    var cgpa = all.credits > 0 ? all.points / all.credits : null;
    summaryRows.push("<tr class='cum'><td>Cumulative CGPA</td><td class='num'>" + fmt2(all.credits) +
      "</td><td class='num'>" + (cgpa === null ? "-" : fmt2(cgpa)) + "</td><td class='num'>" + fmt2(all.points) + "</td></tr>");
    $("summaryBody").innerHTML = summaryRows.join("");

    // Dashboard
    $("cgpaValue").textContent = cgpa === null ? "-" : fmt2(cgpa);
    $("cgpaClass").textContent = cgpa === null ? "Select GP to begin" : classOf(cgpa);
    $("totalCredits").textContent = fmt2(all.credits);
    $("totalPoints").textContent = fmt2(all.points);
    $("failedCredits").textContent = fmt2(all.failed);
  }

  // ---- PDF (browser "Save as PDF" through the print dialog) ----
  var baseTitle = document.title;
  var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  function cleanupPrint() {
    document.body.classList.remove("print-one", "print-all");
    document.querySelectorAll(".print-target").forEach(function (el) { el.classList.remove("print-target"); });
    document.title = baseTitle;
  }

  function slug(s) { return String(s).replace(/[^A-Za-z0-9]+/g, "-").replace(/^-|-$/g, ""); }

  // semId = a semester id for a one-semester PDF, or null for the full marksheet
  function printPdf(semId) {
    cleanupPrint();
    buildTranscript(semId);
    var parts = ["JSTU-EEE-Marksheet"];
    if (state.info.id) parts.push(slug(state.info.id));
    if (semId) {
      var sem = SEMESTERS.filter(function (s) { return s.id === semId; })[0];
      document.body.classList.add("print-all");
      parts.push(slug(sem.name));
    } else {
      document.body.classList.add("print-all");
      parts.push("Year1-4");
    }
    document.title = parts.join("_");   // browsers use the page title as the suggested PDF file name
    window.addEventListener("afterprint", function done() {
      window.removeEventListener("afterprint", done);
      cleanupPrint();
    });
    // Make sure the logo in the transcript is loaded before the print dialog captures the page
    var img = document.querySelector("#transcript img");
    if (img && !img.complete) {
      var go = function () { window.print(); };
      img.addEventListener("load", go, { once: true });
      img.addEventListener("error", go, { once: true });
    } else {
      window.print();
    }
  }

  // ---- Events ----
  function bindEvents() {
    $("semesters").addEventListener("change", function (ev) {
      var t = ev.target;
      var tr = t.closest("tr[data-code]");
      if (!tr || !t.classList.contains("gpsel")) return;
      state.entries[tr.getAttribute("data-code")] = { grade: t.value };
      save(); refresh();
    });
    $("semesters").addEventListener("click", function (ev) {
      var pdf = ev.target.closest(".pdfbtn");
      if (pdf) { printPdf(pdf.getAttribute("data-pdf")); return; }
      var btn = ev.target.closest(".clear");
      if (!btn) return;
      var sem = SEMESTERS.filter(function (s) { return s.id === btn.getAttribute("data-sem"); })[0];
      if (!sem) return;
      sem.courses.forEach(function (c) { delete state.entries[key(c)]; });
      fillInputs(); save(); refresh();
    });
    // Editable elective code / name
    $("semesters").addEventListener("input", function (ev) {
      var t = ev.target;
      if (!t.classList || !t.classList.contains("ed")) return;
      var k = t.getAttribute("data-key");
      state.names[k] = state.names[k] || {};
      state.names[k][t.getAttribute("data-field")] = t.value;
      save();
    });

    [["stName", "name"], ["stId", "id"], ["stSession", "session"], ["stBatch", "batch"]].forEach(function (p) {
      $(p[0]).addEventListener("input", function () { state.info[p[1]] = this.value; save(); });
    });

    $("btnPrint").addEventListener("click", function () { printPdf(null); });
    $("btnReset").addEventListener("click", function () {
      if (!window.confirm("Clear all entered grade points and student details?")) return;
      state = { info: { name: "", id: "", session: "", batch: "" }, entries: {}, names: {} };
      save(); fillInputs(); refresh();
    });
  }

  // ---- Init ----
  load();
  buildScale();
  buildSemesters();
  fillInputs();
  bindEvents();
  refresh();

  // Expose pure logic for testing in Node
  if (typeof module !== "undefined") {
    module.exports = { gradeByLetter: gradeByLetter };
  }
})();
