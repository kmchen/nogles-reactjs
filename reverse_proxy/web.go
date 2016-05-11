package main

import (
	"fmt"
	"log"
	"net/http"
	"net/http/httputil"
	"net/url"
)

func main() {
	fmt.Println("starts reverse proxy")
	// web is the web client ip:port
	web, err := url.Parse("http://localhost:8080")
	if err != nil {
		panic(err)
	}
	proxyWeb := httputil.NewSingleHostReverseProxy(web)

	// backend is the server ip:port
	backend, err := url.Parse("http://localhost:8090")
	if err != nil {
		panic(err)
	}
	proxyBackend := httputil.NewSingleHostReverseProxy(backend)

	http.Handle("/api/", proxyBackend)
	http.Handle("/", proxyWeb)

	// Browse client web from :7979 rather than :8080
	log.Fatal(http.ListenAndServe(":7979", nil))
}
