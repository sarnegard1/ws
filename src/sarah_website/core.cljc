(ns sarah-website.core
  (:require
   [sarah-website.home :as home]
   [sarah-website.centro :as c]
   [sarah-website.betabrand :as beta]
   [sarah-website.bookquest :as bq]
   #?(:clj [hiccup.page :as hp])
   #?(:cljs [reagent.core :as reagent :refer [atom]]))
  #?(:clj
     (:import org.apache.commons.io.FileUtils)))

(def pages
  {beta/content "betabrand.html"
   c/content "centro.html"
   bq/content "bookquest.html"
   home/index "index.html"})


#?(:cljs
   (enable-console-print!))

#?(:cljs

   (reagent/render-component
     [:div
      [beta/content]
      [c/content]
      [bq/content]
      [home/index]]
     (. js/document (getElementById "app"))))

(defn on-js-reload [])
;; optionally touch your app-state to force rerendering depending on
;; your application
;; (swap! app-state update-in [:__figwheel_counter] inc)

#?(:clj
   (defn spitter [filename content]
     (spit (str "blog/" filename) content)))

#?(:clj
   (defn compile-blog! []
     ;; copy css, etc.
     (FileUtils/copyDirectory (java.io.File. "resources/public/css")
                              (java.io.File. "blog/css"))
     (FileUtils/copyDirectory (java.io.File. "resources/public/js")
                              (java.io.File. "blog/js"))
     (FileUtils/copyDirectory (java.io.File. "resources/public/img")
                              (java.io.File. "blog/img"))
     ;; make blog posts
     (doseq [[hic-fn filename] pages]
       (println filename "->" #_(clojure.pprint/pprint
                                (doall (hic-fn))))
       (spitter filename (hp/html5 (hic-fn))))))

#?(:clj
   (compile-blog!))
