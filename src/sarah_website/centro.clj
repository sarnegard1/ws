
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
 "<!--begin header-->"
 [:div.page-wrap
  [:header
   [:div.navbar.container
    [:nav.row
     [:div.main-logo
      [:a {:href "http://saraharnegard.com"}]
      [:h1 "Sarah Arnegard"]
      "<!--                            <img src=\"images/logo.svg\" alt=\"Sarah Arnegard\">-->"
      [:h2 "User Experience Designer"]]
     [:ul
      [:li " " [:a {:href "http://saraharnegard.com"} "Work"]]
      [:li [:a.blog {:href "http://blog.saraharnegard.com"} "Blog"]]
      [:li [:a.about {:href "about.html"} "About"]]
      [:li [:a {:href "resume.html"} "Resume"]]]]]]
  "<!-- ////////////////////// about & contact /////////////////////// -->"
  "<!--\n            <div class=\"about\">\n                <h1 class=\"about-copy\">Hello, I'm Sarah!</h1>\n                <p>I'm a User Experience Designer based in the San Francisco Bay Area. I think a designer&#39;s most valuable skills are listening and asking questions.</p><p>I <span class=\"glyphicon glyphicon-heart\"></span> Pair Design, Interactive Prototypes, Git, and my dog, Mocha. View my <a href=\"Resume.pdf\">resume &#40;pdf&#41;</a>.</p>\n                <a class=\"close\" href=\"#\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a>\n            </div>\n-->"
  "<!-- ////////////////////// project area /////////////////////// -->"
  [:h1.project "Centro Community Partners"]
  [:div.container
   "<!--                           one-->"
   [:section.project-header
    [:div.row
     [:div#carousel-example-generic.col.span6.carousel.slide
      {:data-ride "carousel", :data-interval "false"}
      "<!-- Indicators -->"
      [:ol.carousel-indicators
       [:li.active
        {:data-target "#carousel-example-generic",
         :data-slide-to "0"}]
       [:li
        {:data-target "#carousel-example-generic",
         :data-slide-to "1"}]
       [:li
        {:data-target "#carousel-example-generic",
         :data-slide-to "2"}]
       [:li
        {:data-target "#carousel-example-generic",
         :data-slide-to "3"}]
       [:li
        {:data-target "#carousel-example-generic",
         :data-slide-to "4"}]]
      "<!-- Wrapper for slides -->"
      [:div.carousel-inner
       [:div.item.active
        [:img {:src "images/centro/clients_mockup.png", :alt "..."}]]
       [:div.item
        [:img
         {:src "images/centro/michelle_mockup.png", :alt "..."}]]
       [:div.item
        [:img
         {:src "images/centro/biz_plan_mockup.png", :alt "..."}]]
       [:div.item
        [:img {:src "images/centro/intro_mockup.png", :alt "..."}]]
       [:div.item
        [:img {:src "images/centro/note_1_mockup.png", :alt "..."}]]]
      "<!-- Controls -->"
      [:a.left.carousel-control
       {:href "#carousel-example-generic",
        :role "button",
        :data-slide "prev"}
       [:span.glyphicon.glyphicon-chevron-left]]
      [:a.right.carousel-control
       {:href "#carousel-example-generic",
        :role "button",
        :data-slide "next"}
       [:span.glyphicon.glyphicon-chevron-right]]]
     "<!---->"
     [:div.overview.col.span6
      [:div
       [:h2 "Introduction"]
       [:p
        "Centro Community Partners mission is to help communities grow by matching small business entrepreneurs with volunteer business advisors. They came to our team for a mobile app to improve advisor's communication with their entrepreneurs and improve advisor efficiency."]
       [:p
        "The goal was to create an app that could be integrated with their existing Business Planning Tool. My partner and I created a concept that would include real time updates of their entrepreneur's progress, the ability to create notes on their work, and messaging features.\n                                "]
       [:div.button-container
        [:a.button-link
         {:target "_blank", :href "http://invis.io/GS18JQTPB"}
         "View Prototype"]
        [:small "This will open Invision in a new tab"]]]]]]
   "<!--           part 3: process-->"
   [:section.container
    [:h2 "Process"]
    [:p
     "I spent time learning about Centro's needs and interviewing business advisors who would be using the app. Through this process I uncovered the following pain points: "]
    [:ul
     [:li
      [:strong
       "Lack of knowledge of when entrepreneurs made changes to their business plan - "]
      "this meant that advisors were sometimes ill prepared for advising sessions and unaware of whether entrepreneurs were keeping up with their work"]
     [:li
      [:strong "Disorganized communications - "]
      "Advisors were following up with their entrepreneurs through emails, texts and other messages. This made it hard for them to refer back to messages or know whether messages were recieved. "]
     [:li
      [:strong "Need for constant reminders - "]
      "Advisors need to remind their entrepreneurs of appointments, but would sometimes forget. There was also a problem of reminder messages getting lost in entrepreneurs' inboxes."]]
    [:p
     "I then moved on to sketching to begin generating and testing ideas. I tackled the app dashboard, which would contain the main navigation, as well as a feature that would allow advisors to create notes about their entrepreneur's business plan"]
    [:h3 "App Structure"]
    [:img.constrain {:src "images/centro/site%20map.png", :alt ""}]
    [:h3 "Dashboard Sketches"]
    [:div.row
     [:img.col.span3
      {:src "images/centro/resize/sarah_dash_1.jpg", :alt ""}]
     [:img.col.span3
      {:src "images/centro/resize/sarah_dash_2.jpg", :alt ""}]
     [:img.col.span3
      {:src "images/centro/resize/sarah_dash_3.jpg", :alt ""}]]
    [:p "Possible dashboard layouts"]
    [:h3.clear "Note Flow Sketches"]
    [:div.row
     [:div.col.span6
      [:img {:src "images/centro/note_flow_1_v2.jpg", :alt ""}]
      [:p "Flow 1- Creating a note on a separate screen"]
      [:img
       {:src "images/centro/note_flow_2_v2.jpg",
        :alt "note taking sketch with marker"}]
      [:p "Flow 2- Creating a marker linked to a note"]]
     [:p.col.span6
      "Initially I wasn't sure whether to follow an annotation model, or create simple text notes that were linked to the entrepreneur's business plan. One of the problems, was that the business plan was very content heavy, but was presented as a single piece, which was unwieldy on mobile (based on usabilty feedback). This made it difficult to keep notes in context. After breaking the business plan into logical sections, the text note pages were more contextualized, while allowing for longer notes."]]]
   "<!--           bullet four               -->"
   [:section.container
    [:h2 "Results"]
    [:h3 "Note Flow"]
    [:div.row.centro
     [:img.col.span3
      {:src "images/centro/resize/client_page.jpg", :alt ""}]
     [:img.col.span3
      {:src "images/centro/resize/michelle_page.jpg", :alt ""}]
     [:img.col.span3
      {:src "images/centro/resize/biz_plan.jpg", :alt ""}]
     [:img.col.span3
      {:src "images/centro/resize/biz_plan_intro.jpg", :alt ""}]]
    [:div.row.centro
     [:img.col.span3
      {:src "images/centro/resize/note1.jpg", :alt ""}]
     [:img.col.span3
      {:src "images/centro/resize/note2.jpg", :alt ""}]
     [:img.col.span3
      {:src "images/centro/resize/note3.jpg", :alt ""}]
     [:img.col.span3
      {:src "images/centro/resize/biz_plan_note_icon.jpg"}]]
    [:p]
    [:div.button-container
     [:a.button-link
      {:target "_blank", :href "http://invis.io/GS18JQTPB"}
      "View Full Prototype"]
     [:small "This will open Invision in a new tab"]]]]
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
 "<!--<script src=\"js/jquery-1.3.2.min.js\"></script>-->"
 [:script {:src "js/experiment.js"}]]
