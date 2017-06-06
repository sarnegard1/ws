(ns sarah-website.bookquest
  (:require [sarah-website.recos :as recos]
            [sarah-website.work :as work]
            [sarah-website.footer :as footer]
            [sarah-website.nav :as nav]))

(def case-study
  [:div.container-lrg
   [:h1.project "BookQuest"]
   [:section.container.overview.project-header
    [:div.row
     [:div.col.span12
      [:h2 "Introduction to Case Study"]
      [:p
       "For this project, our team was tasked with creating a reading engagement program for Scholastic. Our first course of action was to research what goals Scholastic would seek to accomplish through this program. We found that Scholastic's reputation as an educational resource was in decline among students and teachers. The question then became, how can we build an application that regains Scholastic's reputation and increase children's interest in reading? Our solution was to create a reading incentive product that is engaging and educational for children. We believe this would :"]
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
      [:p "User research, persona development, feature development, scope definition, project management, sketching and ideation, branding, presentation deck"]]]]
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
   [:section.container
    [:h2 "Persona Creation and Feature Development"]
    [:h3 "Personas"]
    [:p
     "Using our research, we created empathy maps for our parent user and child user. This helped us develop our personas."]
    [:div.row
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
       "From here, we used the personas to create SSNiFs (Stakeholder, Situation, Needs and Features charts ). This allowed us to identify possible features that were directly tied to our users' needs. Next, we prioritized the features and decided which ones we would design for our MVP.\n                            "]
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

   [:section.container
    [:div.col.span6]
    [:div.col.span10
     [:h3 "Site Map"]
     [:img.constrain
      {:src "images/schol/sitemap.png", :alt "Site map"}]]]

   [:section.container
    [:h2 "Sketches and Wireframes"]
    [:h3 "Wireframes"]
    [:div.row
     [:img.col-md-4 {:src "images/schol/reward_1.png", :alt ""}]
     [:img.col-md-4 {:src "images/schol/Quiz.png", :alt ""}]
     [:img.col-md-4 {:src "images/schol/quiz_2.png", :alt ""}]]]
   [:section.container
    [:h3 "Mockups"]
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
   [:section.container
    [:h3 "Prototype and Next Steps"]
    [:div.row
     [:div.button-container
      [:a.button-link
       {:target "_blank", :href "http://invis.io/KC10SCQ8Q"}
       "View Prototype"]
      [:small "This will open Invision in a new tab"]]]]])

(defn content[]
  [:div
    [:header.header
      nav/nav-data]
    case-study
    footer/footer-data])
