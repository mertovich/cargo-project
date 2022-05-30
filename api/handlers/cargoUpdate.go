package handlers

import (
	"api/data"
	"fmt"
	"io/ioutil"
	"net/http"

	"github.com/mertovich/BodyParser"
)

func UpdateCargoLocation(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	if r.URL.Path != "/api/updatecargolocation" {
		http.NotFound(w, r)
		return
	}

	bodyByte, _ := ioutil.ReadAll(r.Body)
	bodyString := string(bodyByte)
	maps := BodyParser.Parser(bodyString)

	data.CargoUpdateLocation(maps["id"], maps["location"])
	cargo := data.GetCargoID(maps["id"])

	fmt.Fprint(w, cargo)
}
