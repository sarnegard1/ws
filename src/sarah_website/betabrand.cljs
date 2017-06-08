(ns sarah-website.betabrand
  (:require [sarah-website.recos :as recos]
            [sarah-website.work :as work]
            [sarah-website.footer :as footer]
            [sarah-website.nav :as nav]))

(def betabrand-case
  [:div.container-lrg
    [:h1.center "Betabrand Redesign"]

    [:section
      [:div.flex
        [:div.col-8
          [:p
            "Betabrand is a clothing company based in San Francisco that carries unique and quirky products, including crowdsourced products. They have a small cult following but would like to expand their reach. Users found the products on their website difficult to navigate and the crowdfunding process difficult to understand and complete."]
          [:h3 "My Role"]
          [:p "For this project I worked on information architecture, product display and filtering, product page layout and checkout flows."]
          [:a
           {:target "_blank", :href "http://invis.io/7R18S468P"}
           "View Prototype"]
          [:small "This will open Invision in a new tab"]]]
     [:section
      [:div.flex
         [:div.col-3
          [:img {:src "img/beta/Home.png", :alt "..."}]
          [:p
           [:strong "Home Page -"]
           " home page is decluttered, featuring only a few unique products rather than overwhelming the user"]]
         [:div.col-3
          [:img {:src "img/beta/Category_page.png", :alt "..."}]
          [:p
            [:strong
              "Product Category Page -"]
            " added faceted navigation."]]
         [:div.col-3
          [:img {:src "img/beta/Product_page.png", :alt "..."}]
          [:p
            [:strong "Product Page-"]
            " created tabs to hold additional information to decrease info hidden below the fold"]]

         [:div.col-3
          [:img {:src "img/beta/Product_page.png", :alt "..."}]
          [:p
            [:strong "Product Page -"]
            " created tabs to hold additional information to decrease info hidden below the fold"]]]
      [:div.flex
         [:div.col-6
          [:img {:src "img/beta/Checkout.png", :alt "..."}]
          [:p
            [:strong " One Page Checkout -"]
            " this would provide better visibility to the user to reduce errors"]]
         [:div.col-6
          [:img {:src "img/beta/Order_review.png", :alt "..."}]
          [:p
            [:strong "Order Review -"]
            " allows user to double check all information before placing order"]]]]


     [:section
      [:h2.center "Process"]
      [:div.flex
        [:div.col-8
          [:p
           "I began by assesing the usability of the site, and conducting card sorting of product categories. I also did a lot of competitive analysis of ecommerce sites."]
          [:img
           {:src "img/beta/deck/sarah_arnegard_project2.001.jpg",
            :alt ""}]
          [:img
           {:src "img/beta/deck/sarah_arnegard_project2.002.jpg",
            :alt ""}]

          [:img
            {:src "img/beta/deck/project2/project2.008.jpg", :alt ""}]
          [:img
           {:src "img/beta/deck/project2/project2.009.jpg", :alt ""}]
          [:img
           {:src "img/beta/deck/project2/project2.010.jpg", :alt ""}]
          [:img
           {:src "img/beta/deck/project2/project2.011.jpg", :alt ""}]]]]]])
     




(defn content[]
  [:div
    [:header.header
      nav/nav-data]
    betabrand-case
    footer/footer-data])
