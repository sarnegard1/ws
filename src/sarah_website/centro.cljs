(ns sarah-website.centro
  (:require [sarah-website.recos :as recos]
            [sarah-website.work :as work]
            [sarah-website.footer :as footer]
            [sarah-website.nav :as nav]))

(defn content []
  [:div
    [:header.header
      nav/nav-data]
    [:div.container-lrg
     [:h1.project "Centro Community Partners"]

     [:section.project-header
      [:div.row
       [:div#carousel-example-generic.col.span6.carousel.slide
        {:data-ride "carousel", :data-interval "false"}
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
       [:small "This will open Invision in a new tab"]]]
     footer/footer-data]])
