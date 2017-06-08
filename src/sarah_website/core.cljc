(ns sarah-website.core
  (:require
   [sarah-website.home :as home]
   [sarah-website.centro :as c]
   [sarah-website.betabrand :as beta]
   [sarah-website.bookquest :as bq]
   [sarah-website.sookasa :as s]
   #?(:clj [hiccup.page :as hp])
   #?(:cljs [reagent.core :as reagent :refer [atom]]))
  #?(:clj
     (:import org.apache.commons.io.FileUtils
              java.awt.Desktop
              java.net.URI
              java.io.File)))

(def pages
  {beta/content "betabrand.html"
   s/content "sookasa.html"
   c/content "centro.html"
   bq/content "bookquest.html"
   home/index "index.html"})

#?(:cljs
   (enable-console-print!))

#?(:cljs

   (reagent/render-component
     [:div
      [beta/content]
      [s/content]
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

#?(:clj (defn add-css [hiccup]))



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
     (try
       (doseq [[hic-fn filename] pages]
         (println filename "->" #_(clojure.pprint/pprint
                                    (doall (hic-fn))))
         (spitter filename (hp/html5
                             [:link {:href "css/style.css"
                                     :rel "stylesheet"
                                     :type "text/css"}]
                             (hic-fn))))
       (.browse (Desktop/getDesktop)
                (.toURI
                  (File. (str (System/getProperty "user.dir")
                              "/blog/index.html"))))
       (println "All done.")
       (catch Exception e "broken"))))

#?(:clj (defn -main [& args] (compile-blog!)))
