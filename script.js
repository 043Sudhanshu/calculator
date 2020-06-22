%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Deedy - One Page Two Column Resume
% LaTeX Template
% Version 1.2 (16/9/2014)
%
% Original author:
% Debarghya Das (http://debarghyadas.com)
%
% Original repository:
% https://github.com/deedydas/Deedy-Resume
%
% IMPORTANT: THIS TEMPLATE NEEDS TO BE COMPILED WITH XeLaTeX
%
% This template uses several fonts not included with Windows/Linux by
% default. If you get compilation errors saying a font is missing, find the line
% on which the font is used and either change it to a font included with your
% operating system or comment the line out to use the default font.
% 
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% 
% TODO:
% 1. Integrate biber/bibtex for article citation under publications.
% 2. Figure out a smoother way for the document to flow onto the next page.
% 3. Add styling information for a "Projects/Hacks" section.
% 4. Add location/address information
% 5. Merge OpenFont and MacFonts as a single sty with options.
% 
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%
% CHANGELOG:
% v1.1:
% 1. Fixed several compilation bugs with \renewcommand
% 2. Got Open-source fonts (Windows/Linux support)
% 3. Added Last Updated
% 4. Move Title styling into .sty
% 5. Commented .sty file.
%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%
% Known Issues:
% 1. Overflows onto second page if any column's contents are more than the
% vertical limit
% 2. Hacky space on the first bullet point on the second column.
%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


\documentclass[]{deedy-resume-openfont}
\usepackage{fancyhdr}
 
\pagestyle{fancy}
\fancyhf{}
 
\begin{document}

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%
%     LAST UPDATED DATE
%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
\lastupdated

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%
%     TITLE NAME
%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
\namesection{Sudhanshu}{Chauhan}{ \urlstyle{same}\href{}{} \href{}{043sudhanshu@gmail.com  }|
\href{}{}(+91) 7906571690  \href{}{}
}

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%
%     COLUMN ONE
%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

\begin{minipage}[t]{0.33\textwidth} 

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%     EDUCATION
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

\section{Education} 

\subsection{A.K.G.E.C}
\descript{B.E-INFORMATION TECHNOLOGY}
\location{2016 - 2020 | CGPA : 7.0}
\sectionsep

\subsection{Modern Academy Senior Secondary School}
\descript{Class XII}
\location{C.B.S.E |  2015 }
Aggregate:75.00 \\



\sectionsep

\subsection{Modern Academy Senior Secondary School}
\descript{Class X}
\location{C.B.S.E |  2013 }
CGPA : 9.2 \\
\sectionsep

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%     LINKS
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

\section{Links} 
Github:// \href{https://github.com/043sudhanshu}{\bf 043Sudhanshu } \\
LinkedIn://  \href{https://www.linkedin.com/in/sudhanshu-chauhan-146911187}{\bf Sudhanshu chauhan} \\


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%     COURSEWORK
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

\section{Coursework}
\subsection{ONLINE COURSE}
DATA STRUCTURES \\
FULL STACK WEB DEVELOPMENT \\
OBJECT ORITENTED PROGRAMMING
\sectionsep

\subsection{Undergraduate}
OPERATING SYSTEM\\
DBMS\\
SYSTEM DESIGN \\

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%     SKILLS
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

\section{Skills}
\subsection{Programming}
\textbullet{}JAVA \textbullet{}   JAVASCRIPT \textbullet{} MYSQL \textbullet{} HTML \\
\textbullet{} CSS
\subsection{FRAMEWORKS}
\textbullet{}NODEJS \textbullet{} MONGODB/MONGOOSE\\    \textbullet{} EXPRESSJS \textbullet{} PASSPORTJS  
\textbullet{} SASS \\
\textbullet{} SCSS \textbullet{} REST API\textbullet{} FIREBASE
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%
%     COLUMN TWO
%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

\end{minipage} 
\hfill
\begin{minipage}[t]{0.61\textwidth} 

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%     EXPERIENCE
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

\section{Experience}
\runsubsection{Facebook}
\descript{| Software Engineer }
\location{Jan 2015 - Present | New York, NY}
\sectionsep

\runsubsection{Coursera}
\descript{| KPCB Fellow + Software Engineering Intern }
\location{June 2014 – Sep 2014 | Mountain View, CA}
\vspace{\topsep} % Hacky fix for awkward extra vertical space
\begin{tightemize}
\item 52 out of 2500 applicants chosen to be a KPCB Fellow 2014.
\item Led and shipped Yoda - the admin interface for the new Phoenix platform. 
\item Full-stack developer - Wrote and reviewed code for JS using Backbone, Jade, Stylus and Require and Scala using Play
\end{tightemize}
\sectionsep

\runsubsection{Google}
\descript{| Software Engineering Intern }
\location{May 2013 – Aug 2013 | Mountain View, CA}
\begin{tightemize}
\item Worked on the YouTube Captions team, in Javascript and Python to plan, to design and develop the full stack to add and edit Automatic Speech Recognition captions. In production.
\item Created a backbone.js-like framework for the Captions editor.
\end{tightemize}
\sectionsep

\runsubsection{Phabricator}
\descript{| Open Source Contributor \& Team Leader}
\location{Jan 2013 – May 2013 | Palo Alto, CA \& Ithaca, NY}
\begin{tightemize}
\item Phabricator is used daily by Facebook, Dropbox, Quora, Asana and more.
\item I created the Meme generator and more in PHP and Shell.
\item Led a team from MIT, Cornell, IC London and UHelsinki for the project.
\end{tightemize}
\sectionsep

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%     RESEARCH
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

\section{Research}
\runsubsection{Cornell Robot Learning Lab}
\descript{| Researcher}
\location{Jan 2014 – Jan 2015 | Ithaca, NY}
Worked with \textbf{\href{http://www.cs.cornell.edu/~ashesh/}{Ashesh Jain}} and \textbf{\href{http://www.cs.cornell.edu/~asaxena/}{Prof Ashutosh Saxena}} to create \textbf{PlanIt}, a tool which  learns from large scale user preference feedback to plan robot trajectories in human environments.  
\sectionsep

\runsubsection{Cornell Phonetics Lab}
\descript{| Head Undergraduate Researcher}
\location{Mar 2012 – May 2013 | Ithaca, NY}
Led the development of \textbf{QuickTongue}, the first ever breakthrough tongue-controlled game with \textbf{\href{http://conf.ling.cornell.edu/~tilsen/}{Prof Sam Tilsen}} to aid in Linguistics research. 
\sectionsep

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%     AWARDS
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

\section{Awards} 
\begin{tabular}{rll}
2014         & top 52/2500  & KPCB Engineering Fellow\\
2014         & 1\textsuperscript{st}/50  & Microsoft Coding Competition, Cornell\\
2013         & National  & Jump Trading Challenge Finalist\\
2013     & 7\textsuperscript{th}/120 & CS 3410 Cache Race Bot Tournament  \\
2012     & 2\textsuperscript{nd}/150 & CS 3110 Biannual Intra-Class Bot Tournament \\
2011     & National & Indian National Mathematics Olympiad (INMO) Finalist \\
\end{tabular}
\sectionsep

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%     PUBLICATIONS
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

\section{Publications} 
\renewcommand\refname{\vskip -1.5em} % Couldn't get this working from the .cls file
\bibliographystyle{abbrv}
\bibliography{publications}
\nocite{*}

\end{minipage} 
\end{document}  \documentclass[]{article}
