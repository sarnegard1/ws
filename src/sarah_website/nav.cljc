(ns sarah-website.nav)

(def hiccup
  [:div.container-lrg
   [:div.spread
    [:div [:a.logo "Sarah Arnegard"]]
    [:div
     [:a.nav-link {:href "#work"} "Work "]
     [:a.nav-link {:href "https://blog.saraharnegard.com"} "Blog"]
     [:a.nav-link
      {:href "/resume.html"}
      "Resume"]]]])
