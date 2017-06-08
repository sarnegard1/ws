(ns sarah-website.util)

(defn image
  ([source] (image source ""))
  ([source alt]
   [:img {:src source :alt alt}]))
