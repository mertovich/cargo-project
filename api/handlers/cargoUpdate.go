package handlers

import (
	"api/data"
	"fmt"
	"io/ioutil"
	"net/http"
	"strings"

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
	location := strings.ReplaceAll(maps["location"], "%20", " ")
	data.CargoUpdateLocation(maps["id"], location)
	cargo := data.GetCargoID(maps["id"])

	fmt.Fprint(w, cargo)
}
