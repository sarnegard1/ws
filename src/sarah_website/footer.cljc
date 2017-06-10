(ns sarah-website.footer
  (:require [rum.core :as rum]))

(defn nav-link [title href]
  [:a.nav-link {:href href} (str title "  ")])

(def hiccup
  [:div.footer
    [:div.flex.container-sml
     [:div.col-12.text-center
      [:div
       [:p "Get in touch"]
       (nav-link "https://www.linkedin.com/in/saraharnegard/" "LinkedIn")
       (nav-link"mailto:sarah.arnegard@gmail.com"             "Email")
       (nav-link"https://blog.saraharnegard.com/"             "Blog")]
      [:br]
      [:div
       [:span
        "&copy; 2017 Sarah Arnegard  "]]]]])
