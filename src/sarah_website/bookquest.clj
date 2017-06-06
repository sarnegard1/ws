("<!DOCTYPE html>"
 [:html
  "<!--Project Page-->"
  [:head
   [:title "Sarah Arnegard - Portfolio"]
   [:meta {:charset "UTF-8"}]
   [:meta
    {:name "viewport",
     :content "width=device-width, initial-scale=1.0"}]
   [:meta
    {:name "description",
     :content
     "This portfolio project is a reading incentive program designed for Scholastic."}]
   [:link {:rel "stylesheet", :href "css/normalize.css"}]
   [:link {:rel "stylesheet", :href "css/gridpak.css"}]
   [:link
    {:href
     "http://fonts.googleapis.com/css?family=Oswald:400|Raleway:400,700",
     :rel "stylesheet"}]
   [:link
    {:rel "stylesheet",
     :href
     "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css"}]
   [:link {:rel "stylesheet", :href "css/icomoon.css"}]
   [:link {:rel "stylesheet", :href "css/mobilefirst.css"}]
   [:script
    {:src
     "//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"}]
   [:script
    "window.jQuery || document.write('<script src=\"js/jquery-2.1.1.min.js\"><\\/script>')"]
   "<!--    <script src=\"js/jquery-2.1.1.min.js\"></script>-->"
   [:script {:src "js/carousel.js"}]]
  [:body
   "<!-- Google Tag Manager -->"
   [:noscript
    [:iframe
     {:src "//www.googletagmanager.com/ns.html?id=GTM-NHC94F",
      :height "0",
      :width "0",
      :style "display:none;visibility:hidden"}]]
   [:script
    "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\nnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\nj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n})(window,document,'script','dataLayer','GTM-NHC94F');"]
   "<!-- End Google Tag Manager -->"
   "<!--start header-->"
   [:div.page-wrap
    [:header
     [:div.navbar.container
      [:nav.row
       [:div.main-logo
        [:a {:href "http://saraharnegard.com"}]
        [:h1 "Sarah Arnegard"]
        [:h2 "User Experience Designer"]]
       [:ul
        [:li " " [:a {:href "index.html"} "Work"]]
        [:li [:a.blog {:href "http://blog.saraharnegard.com"} "Blog"]]
        "<!--                            <li> <a href=\"http://saraharnegard.com\">Portfolio</a></li>-->"
        [:li [:a.about {:href "about.html"} "About"]]
        [:li [:a {:href "resume.html"} "Resume"]]]]]]
    "<!-- ////////////////////// about & contact /////////////////////// -->"
    "<!--\n            <div class=\"about\">\n                <h1 class=\"about-copy\">Hello, I'm Sarah!</h1>\n                <p>I'm a User Experience Designer based in the San Francisco Bay Area. I think a designer&#39;s most valuable skills are listening and asking questions.</p><p>I <span class=\"glyphicon glyphicon-heart\"></span> Pair Design, Interactive Prototypes, Git, and my dog, Mocha. View my <a href=\"Resume.pdf\">resume &#40;pdf&#41;</a>.</p>\n                <a class=\"close\" href=\"#\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a>\n            </div>\n-->"
    "<!-- ////////////////////// project area /////////////////////// -->"
    [:h1.project "BookQuest"]
    [:div.container
     [:section.container.overview.project-header
      [:div.row
       "<!---->"
       [:div.col.span12
        [:h2 "Introduction to Case Study"]
        [:p
         "\n                                For this project, our team was tasked with creating a reading\n                                engagement program for Scholastic. Our first course\n                                of action was to research what goals Scholastic would\n                                seek to accomplish through this program. We found that\n                                Scholastic's reputation as an educational resource was\n                                in decline among students and teachers. The question\n                                then became, how can we build an application that\n                                regains Scholastic's reputation and increase\n                                children's interest in reading? Our solution was to\n                                create a reading incentive product that is\n                                engaging and educational for children. We\n                                believe this would :\n                            "]
        [:ul
         [:li "Solve parents' need to encourage children to read"]
         [:li "Prove commitment to education"]
         [:li "Foster excitement for Scholastic titles"]]]]
      [:div.row
       [:div.col-md-4 [:img {:src "", :alt ""}]]
       [:div.col-md-4 [:img {:src "", :alt ""}]]
       [:div.col-md-4 [:img {:src "", :alt ""}]]]]
     [:section.overview.container
      [:div.row
       [:div.col.span3
        [:h2 "Challenge"]
        [:p
         "We were tasked with creating a reading engagement product for Scholastic."]]
       [:div.col.span3 [:h2 "Duration"] [:p "2 Weeks"]]
       [:div.col.span3
        [:h2 "Client"]
        [:p
         "Scholastic was the assigned client for the student project during the User Experience Design Immersive at General Assembly, San Francisco 2014 "]]
       [:div.col.span3
        [:h2 "My Role"]
        [:p
         "User research, persona development, feature development, scope definition, project management, sketching and ideation, branding, presentation deck"]]]]
     "<!--   ................   BEGIN RESEARCH   ........................  -->"
     [:section.container
      [:h2.section-title "Business Research"]
      [:div.row
       [:div.col-md-8
        [:h3 "Reading program competitive landscape"]
        [:img
         {:src "images/schol/competitive_research.png",
          :alt "Competitive Analysis Diagram"}]]
       [:div.col-md-4
        [:h3 "Findings:"]
        [:ul
         [:li
          "Few reading incentive programs combine assessments,  web portal and prizes/ parent added prizes."]
         [:li
          "Assessments, if any, are in a traditional test format and focus on remembering trivia from the book\n                                "]
         [:li "Existing reading sites difficult to navigate"]]]]
      [:div.row
       [:h3
        "Current Scholastic outreach efforts to students and parents"]
       [:div.col.span3
        [:figure.flyer
         [:img
          {:src "images/schol/scho2LG.jpg",
           :alt "Sample Scholastic Book Fair Flyer"}]
         [:figcaption
          "Current Scholastic offering focuses around school book fairs that heavily market toys and posters to children"]]]
       [:div.col.span8
        [:h3 "Method"]
        [:ul
         [:li "Researched Scholastic programs through company website"]
         [:li
          "Surveyed parents and teachers regarding their thoughts and feelings about Scholastic and their programs\n                              "]]
        [:h3 "Findings:"]
        [:ul
         [:li
          "Scholastic book fairs market directly to children so they focus on toy tie-ins and music posters, rather than educational material"]
         [:li
          "Teachers feel negatively about Scholastic and associate them more with marketing than educational value"]
         [:li
          "Parents and teachers surveyed are concerned that students are not excited to buy books but stuff like pens and toys"]
         [:li
          "Parents and teachers surveyed feel that Scholastic's current efforts do a poor job in promoting reading"]]]]]
     [:section.container
      [:h2.section-title.clear "User Research"]
      [:p
       "We visited a playground at Yerba Buena Center to conduct user interviews and sent out surveys to parents and teachers in our network"]
      [:div.row
       [:div.col-md-6
        [:h3 "Example Quotes"]
        [:ul
         [:li
          "“The program should make sure kids actually read the books they said”"]
         [:li "“The programs we used were too easy to game”"]
         [:li "“There needs to be awesome prizes”"]
         [:li
          "“[Children] have more access to desktops and tablets than mobile devices” "]
         [:li
          "“My daughter did a summer reading program, now she reads at a high school level”"]
         [:li
          "“I don’t like the books my son wants from the book fair”"]
         [:li
          "“There is a lot competing for children's time such as TV and activities”"]]]
       [:div.col-md-6
        [:h3 "Common themes identified through affinity mapping"]
        [:ul
         [:li
          "Parents believe reading skills lead to academic success"]
         [:li "Parents weigh educational value vs price of materials"]
         [:li
          "Programs that are easy to cheat create a lack of motivation"]
         [:li "Parents want better ways to encourage reading"]
         [:li "Accountability and rewards needed are needed"]]]]]
     "<!-- .............. END RESEARCH SECTION ............................. -->"
     "<!-- ............... Design Section ................................ -->"
     [:section.container
      [:h2 "Persona Creation and Feature Development"]
      [:h3 "Personas"]
      [:p
       "Using our research, we created empathy maps for our parent user and child user. This helped us develop our personas."]
      [:div.row
       "<!--\n                            <div class=\"col-md-4 \">\n                                             <img src=\"images/schol/child_empathy_map.png\" alt=\"\" >\n                                                <img src=\"images/schol/parent_empathy_map.png\" alt=\"\" >\n                                         </div>\n                            -->"
       "<!-- <img src=\"images/schol/IMG_1489.jpg\" alt=\"\"> -->"
       [:img.col.span6
        {:src "images/schol/persona_child.png", :alt ""}]
       [:img.col.span6
        {:src "images/schol/persona_adult.png", :alt ""}]]
      [:div.row
       [:h3 "Problem Statements"]
       [:h5.col-md-4
        "How might we allow Susan to help Jenny improve reading skills so that she can take an active role in her academic success?"]
       [:h5.col-md-4
        "How might we measurably increase Jenny's reading by using extrinsic rewards catered to her as well as instrinsic rewards in a sense of mastery and accomplishment?"]
       [:h5.col-md-4
        "How might we regain Scholastic’s reputation as an educational company while creating interest around Scholastic products?"]]
      [:h3 "SSNiFs"]
      [:div.row
       [:div.col.span6
        [:p
         "\n                                From here, we used the personas to create SSNiFs (Stakeholder, Situation, Needs and Features charts ). This allowed us to identify possible features that were directly tied to our users' needs. Next, we prioritized the features and decided which ones we would design for our MVP.\n                            "]
        [:img {:src "images/schol/Parent_SSNiF.png", :alt ""}]]
       [:img.col.span6 {:src "images/schol/Jenny_SSNiF.png", :alt ""}]]
      [:h3.clear "User Flows"]
      [:div.row
       [:img
        {:src "images/schol/bookquest_child_flow.png",
         :alt "Student happy path"}]
       [:hr]
       [:img
        {:src "images/schol/bookquest_parent_flow.png",
         :alt "Parent user flow"}]]]
     "<!--        SITE MAP-->"
     [:section.container
      [:div.col.span6]
      "<!--\n                        site map\n                        user flows\n                        -->"
      [:div.col.span10
       [:h3 "Site Map"]
       [:img.constrain
        {:src "images/schol/sitemap.png", :alt "Site map"}]]]
     "<!--        Wire frames-->"
     [:section.container
      [:h2 "Sketches and Wireframes"]
      [:h3 "Wireframes"]
      [:div.row
       [:img.col-md-4 {:src "images/schol/reward_1.png", :alt ""}]
       [:img.col-md-4 {:src "images/schol/Quiz.png", :alt ""}]
       [:img.col-md-4 {:src "images/schol/quiz_2.png", :alt ""}]]]
     "<!--        Testing-->"
     [:section.container
      [:h3 "Mockups"]
      "<!--           testing and higher fi-->"
      [:div.row
       [:img.col-md-4
        {:src "images/schol/k%20-%20dashboard%201.png", :alt ""}]
       [:img.col-md-4
        {:src "images/schol/k%20-%20quiz%201.png", :alt ""}]
       [:img.col-md-4
        {:src "images/schol/k%20-%20sign%20up%201.png", :alt ""}]]]
     [:section.container
      [:h3 "Challenge (Quiz) Flow"]
      [:div.row
       [:div#carousel-quiz.col.span8.carousel.slide
        {:data-ride "carousel", :data-interval "false"}
        "<!-- Indicators -->"
        [:ol.carousel-indicators
         [:li.active
          {:data-target "#carousel-quiz", :data-slide-to "0"}]
         [:li {:data-target "#carousel-quiz", :data-slide-to "1"}]
         [:li {:data-target "#carousel-quiz", :data-slide-to "2"}]
         [:li {:data-target "#carousel-quiz", :data-slide-to "3"}]
         [:li {:data-target "#carousel-quiz", :data-slide-to "4"}]]
        "<!-- Wrapper for slides -->"
        [:div.carousel-inner
         [:div.item.active
          [:img {:src "images/schol/k%20-%20quiz%201.png", :alt "..."}]
          [:div.carousel-caption]]
         [:div.item
          [:img {:src "images/schol/k%20-%20quiz%202.png", :alt "..."}]
          [:div.carousel-caption]]
         [:div.item
          [:img {:src "images/schol/k%20-%20quiz%203.png", :alt "..."}]
          [:div.carousel-caption]]
         [:div.item
          [:img {:src "images/schol/k%20-%20quiz%204.png", :alt "..."}]
          [:div.carousel-caption]]
         [:div.item
          [:img {:src "images/schol/k%20-%20quiz%205.png", :alt "..."}]
          [:div.carousel-caption]]]
        "<!-- Controls -->"
        [:a.left.carousel-control
         {:href "#carousel-quiz", :role "button", :data-slide "prev"}
         [:span.glyphicon.glyphicon-chevron-left]]
        [:a.right.carousel-control
         {:href "#carousel-quiz", :role "button", :data-slide "next"}
         [:span.glyphicon.glyphicon-chevron-right]]]
       [:div.col-md-4
        [:p
         "There were several goals I wanted to address with the challenges:"]
        [:ul
         [:li
          [:p
           [:strong "Educational Value:"]
           " other reading quizzes were based more on remembering facts. The questions should be about important information from the book rather than trivia"]]
         [:li
          [:p
           [:strong "Fun & Interactivity:"]
           " create a more engaging experience by using images, videos and other media"]]
         [:li
          [:p
           [:strong "Creative Confidence & Engagement:"]
           " open ended prompts to encourage deeper thinking and give importance to the child’s own thoughts and beliefs"]]]]]]
     "<!--        Prototype and next steps-->"
     [:section.container
      [:h3 "Prototype and Next Steps"]
      [:div.row
       [:div.button-container
        [:a.button-link
         {:target "_blank", :href "http://invis.io/KC10SCQ8Q"}
         "View Prototype"]
        [:small "This will open Invision in a new tab"]]
       "<!--            <img class=\"col span6\" src=\"\" alt=\"prototype vidya\">-->"]]]
    "<!--  /////////////////////////  Begin Footer  //////////////////////   -->"]
   [:footer
    [:div.container
     [:ul
      [:li
       [:a.icon-linkedin
        {:href "https://www.linkedin.com/in/saraharnegard/"}]]
      [:li [:a.icon-mail {:href "mailto:saraharnegard@gmail.com"}]]
      [:li [:a.icon-twitter {:href "https://twitter.com/hey_arne"}]]]
     [:div.col-md-4.col-md-offset-4
      "  "
      [:p "This site was designed and coded by me."]
      [:p
       "\n                        Grid system was generated with "
       [:a {:href "http://gridpak.com/"} "Gridpak."]
       " Icons from "
       [:a
        {:href "http://getbootstrap.com/components/"}
        "Bootstrap Glypicons"]
       " and "
       [:a {:href "https://icomoon.io/"} "Icomoon"]
       ". I'm also using the "
       [:a
        {:href "http://getbootstrap.com/javascript/#carousel"}
        "Bootstrap Carousel Plugin"]
       " and typefaces served by "
       [:a {:href "https://www.google.com/fonts"} "Google Fonts"]
       ".\n                    "]
      "<!--</div>\n                <p>this site was designed and coded by me</p>\n                <small>&copy; Sarah Arnegard 2014</small>\n-->"]]]
   "<!--        <script src=\"js/jquery-1.3.2.min.js\"></script>-->"
   [:script {:src "js/experiment.js"}]]])
