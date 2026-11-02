# SE-Practice
Timed, blank-file coding practice — C#/.NET, JavaScript, SQL Server and Python data structures &amp; algorithms. Every attempt is written from scratch without AI-generated code, then retested 3+ weeks later.

# se-practice

Timed, blank-file coding practice for my software engineering roadmap:  
C# / .NET · JavaScript · SQL Server · Python (data structures & algorithms) · Git

I'm a software engineering student at New England Institute of Technology (NEIT). This repo is the evidence behind my progress. Every attempt here was written from an empty file, on a timer, without tutorials or AI-generated code.

---

## The rules

1. **Blank file.** Every attempt starts from an empty file. No copying from notes, old solutions, or tutorials.
2. **Timed.** Each test has a time limit (usually 10–60 minutes). I record how long it actually took.
3. **No AI-written code.** I use AI for explanations and hints while learning, never to write the code in this repo.
4. **Pass, then retest.** A skill only counts once I pass it, then pass a retest **3+ weeks later** from a blank file again. That checks I actually remember it.
5. **Failed attempts stay.** "Not yet" attempts are committed too. They show what I was missing and how it got fixed.

---

## Structure

```
se-practice/
├── baseline/       Week 1 diagnostic tests (Nov 2026) — where I started
├── csharp/         C# fundamentals, collections + LINQ, OOP, files, async, EF Core, Web API, xUnit
├── javascript/     fundamentals, arrays/objects, DOM, forms, async/fetch, classes
├── html-css/       responsive layouts, accessible forms
├── sql/            SQL Server syntax unless the file says otherwise (MySQL/SQLite noted)
├── python-dsa/     Big-O, recursion, stacks/queues, hash maps, trees, graphs, LeetCode
└── git/            branch / merge-conflict / pull-request exercises
```

Each attempt gets its own folder, named by skill, date, and attempt number:

```
csharp/collections-linq/2027-01-20-attempt-1/
├── Program.cs
└── NOTES.md
```

### NOTES.md template

```markdown
# <skill> — attempt <n>

- **Date:** YYYY-MM-DD
- **Test:** <one-line description of the task>
- **Time limit / time taken:** __ min / __ min
- **Result:** Pass | Not yet
- **Retest of:** <link to the first pass, if this is a retest>

## What was hard

## What I'd do differently
```

---

## Commit messages

```
<skill>: attempt <n> (<pass|not yet>, <minutes> min)
```

Examples:

```
cs-collections: attempt 1 (not yet, 25 min)
cs-collections: attempt 2 (pass, 19 min)
sql-joins: retest (pass, 8 min)
```

---

## Stack

| Area | Tools |
|---|---|
| C# / .NET | .NET SDK, Visual Studio, xUnit |
| Web | HTML, CSS, JavaScript |
| Databases | SQL Server Express + SSMS (MySQL/SQLite syntax noted where used) |
| Data structures & algorithms | Python, LeetCode |
| Version control | Git, GitHub |

---

## Progress

Progress, retest dates, and my internship-readiness checklist live in my roadmap tracker. This repo holds the code those results are based on.
