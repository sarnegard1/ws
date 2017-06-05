(ns sarah-website.nav)

(def nav-data
  [:div.container-lrg
   [:div.col-12.spread
    [:div [:a.logo "Sarah Arnegard " (rand)]]
    [:div
     [:a.nav-link {:href "#work"} "Work "]
     [:a.nav-link {:href "https://blog.saraharnegard.com"} "Blog"]
     [:a.nav-link
      {:href "/resume.html"}
      "Resume"]]]])