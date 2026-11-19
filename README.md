# JSTU EEE Marksheet

Semester-wise marksheet and CGPA for B.Sc. Engg. in EEE, Jamalpur Science & Technology University.
Courses, credits and the grading scale come from the JSTU EEE marksheet template (Years 1 to 3) and the 4th Year course lists.

## How to use

1. Unzip the folder.
2. Open `index.html` in any modern browser. No server, internet or installation is needed.
3. Select the GP (grade point, for example 3.75) for each course. The grade letter and points appear automatically. Leave a course empty if it has no result yet.
4. Semester GPA, year totals and CGPA update automatically.

Your entries are saved in your own browser (localStorage). Use "Download full PDF" for a one-page A4 "Transcript of Academic Record" (only semesters with results are included), or "Download PDF" on a semester, or "Reset all" to start over.

## Calculation

- GPA = sum of (credit x grade point) / sum of credits
- Courses with no result are left out
- Failed courses (F, below 40) count in attempted credits with 0.00 points

| Marks | Grade | GP   |
|-------|-------|------|
| 80+   | A+    | 4.00 |
| 75-80 | A     | 3.75 |
| 70-75 | A-    | 3.50 |
| 65-70 | B+    | 3.25 |
| 60-65 | B     | 3.00 |
| 55-60 | B-    | 2.75 |
| 50-55 | C+    | 2.50 |
| 45-50 | C     | 2.25 |
| 40-45 | D     | 2.00 |
| below 40 | F  | 0.00 |

## Editing courses

All courses are listed in the `SEMESTERS` array at the top of `script.js`.

The elective rows in 4th Year (Elective I, Elective II, Elective III and their sessionals) have an editable code and name. Type the real course code and title in the dashed boxes; they are saved in your browser and appear in the PDFs.

Unofficial student utility. Verify final results against official university records.

**Developed By**
Kawsar Alam
Jamalpur Science & Technology University (JSTU)
Department of Electrical and Electronic Engineering (EEE)
Session: 2024-25
