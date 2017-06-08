(ns sarah-website.centro
  (:require [sarah-website.recos :as recos]
            [sarah-website.work :as work]
            [sarah-website.footer :as footer]
            [sarah-website.nav :as nav]))

(def centro-case
  [:div.container-lrg
    [:h1.center "Centro Community Partners"]
    [:section
      [:div.flex
        [:div.carousel-inner
         [:div
          [:img {:src "images/centro/clients_mockup.png", :alt "..."}]]
         [:div
          [:img
           {:src "images/centro/michelle_mockup.png", :alt "..."}]]
         [:div
          [:img
           {:src "images/centro/biz_plan_mockup.png", :alt "..."}]]
         [:div
          [:img {:src "images/centro/intro_mockup.png", :alt "..."}]]
         [:div
          [:img {:src "images/centro/note_1_mockup.png", :alt "..."}]]]
       [:div.flex
         [:div.col-8
          [:div
           [:p
            "Centro Community Partners mission is to help communities grow by matching small business entrepreneurs with volunteer business advisors. They came to our team for a mobile app to improve advisor's communication with their entrepreneurs and improve advisor efficiency."]
           [:p
            "The goal was to create an app that could be integrated with their existing Business Planning Tool. Based on user and client needs, we created a concept that would include real time updates of their entrepreneur's progress, the ability to create notes on their work, and messaging features."]
           [:div.button-container
            [:a.button-link
             {:target "_blank", :href "http://invis.io/GS18JQTPB"}
             "View Prototype"]
            [:small "This will open Invision in a new tab"]]]]]]]
    [:section
     [:div.flex
       [:div.col-8
         [:h2.center "Process"]
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
          "I then moved on to sketching to begin generating and testing ideas. I tackled the app dashboard, which would contain the main navigation, as well as a feature that would allow advisors to create notes about their entrepreneur's business plan"]]]]
    [:section
     [:div.flex
       [:div.col-8
         [:h2.center "App Structure"]
         [:img.constrain {:src "images/centro/site%20map.png", :alt ""}]
         [:h3 "Dashboard Sketches"]
         [:div.row
          [:img.col.span3
           {:src "images/centro/resize/sarah_dash_1.jpg", :alt ""}]
          [:img.col.span3
           {:src "images/centro/resize/sarah_dash_2.jpg", :alt ""}]
          [:img.col.span3
           {:src "images/centro/resize/sarah_dash_3.jpg", :alt ""}]]
         [:p "Possible dashboard layouts"]]]]

    [:section
      [:div.flex
        [:div.col-12
          [:h3 "Note Creation Flow Sketches"]
          [:img {:src "images/centro/note_flow_1_v2.jpg", :alt ""}]
          [:p "Flow 1- Creating a note on a separate screen"]
          [:img {:src "images/centro/note_flow_2_v2.jpg", :alt "note taking sketch with marker"}]
          [:p "Flow 2- Creating a marker linked to a note"]]]
      [:div.flex
         [:div.col-8
          [:p
           "Initially I wasn't sure whether to follow an annotation model, or create simple text notes that were linked to the entrepreneur's business plan. One of the problems, was that the business plan was very content heavy, but was presented as a single piece, which users found unwieldy on mobile. This made it difficult to keep notes in context. After breaking the business plan into logical sections, the text note pages were more contextualized, while allowing for longer notes."]]]]


    [:section.container
       [:h2 "Results"]
       [:h3 "Note Flow"]
       [:div.flex
         [:div.col-12
          [:img.col.span3
           {:src "images/centro/resize/client_page.jpg", :alt ""}]
          [:img.col.span3
           {:src "images/centro/resize/michelle_page.jpg", :alt ""}]
          [:img.col.span3
           {:src "images/centro/resize/biz_plan.jpg", :alt ""}]
          [:img.col.span3
           {:src "images/centro/resize/biz_plan_intro.jpg", :alt ""}]]]
       [:div.flex
         [:div.col-12
           [:img.col.span3
             {:src "images/centro/resize/note1.jpg", :alt ""}]
           [:img.col.span3
             {:src "images/centro/resize/note2.jpg", :alt ""}]
           [:img.col.span3
             {:src "images/centro/resize/note3.jpg", :alt ""}]
           [:img.col.span3
             {:src "images/centro/resize/biz_plan_note_icon.jpg"}]

          [:a.button-link
           {:target "_blank", :href "http://invis.io/GS18JQTPB"}
           "View Full Prototype"]
          [:small "This will open Invision in a new tab"]]]]])


(def centro-case-1
  [:div.container-lrg
     [:h1.center "Centro Community Partners"]

     [:section
      [:div.flex
        [:div.carousel-inner
         [:div
          [:img {:src "images/centro/clients_mockup.png", :alt "..."}]]
         [:div
          [:img
           {:src "images/centro/michelle_mockup.png", :alt "..."}]]
         [:div
          [:img
           {:src "images/centro/biz_plan_mockup.png", :alt "..."}]]
         [:div
          [:img {:src "images/centro/intro_mockup.png", :alt "..."}]]
         [:div
          [:img {:src "images/centro/note_1_mockup.png", :alt "..."}]]]
       [:div.flex
         [:div.col-8
          [:div
           [:p
            "Centro Community Partners mission is to help communities grow by matching small business entrepreneurs with volunteer business advisors. They came to our team for a mobile app to improve advisor's communication with their entrepreneurs and improve advisor efficiency."]
           [:p
            "The goal was to create an app that could be integrated with their existing Business Planning Tool. Based on user and client needs, we created a concept that would include real time updates of their entrepreneur's progress, the ability to create notes on their work, and messaging features."]
           [:div.button-container
            [:a.button-link
             {:target "_blank", :href "http://invis.io/GS18JQTPB"}
             "View Prototype"]
            [:small "This will open Invision in a new tab"]]]]]]]







     [:section.container
        [:h2 "Results"]
        [:h3 "Note Flow"]
        [:div.flex
          [:div.col-12
           [:img.col.span3
            {:src "images/centro/resize/client_page.jpg", :alt ""}]
           [:img.col.span3
            {:src "images/centro/resize/michelle_page.jpg", :alt ""}]
           [:img.col.span3
            {:src "images/centro/resize/biz_plan.jpg", :alt ""}]
           [:img.col.span3
            {:src "images/centro/resize/biz_plan_intro.jpg", :alt ""}]]]
        [:div.flex
          [:div.col-12
            [:img.col.span3
              {:src "images/centro/resize/note1.jpg", :alt ""}]
            [:img.col.span3
              {:src "images/centro/resize/note2.jpg", :alt ""}]
            [:img.col.span3
              {:src "images/centro/resize/note3.jpg", :alt ""}]
            [:img.col.span3
              {:src "images/centro/resize/biz_plan_note_icon.jpg"}]

           [:a.button-link
            {:target "_blank", :href "http://invis.io/GS18JQTPB"}
            "View Full Prototype"]
           [:small "This will open Invision in a new tab"]]]]])


(defn content[]
  [:div
    [:header.header
      nav/nav-data]
 ;  (into [:div.section]
 ;        (map section section-info))
    centro-case
    footer/footer-data])
