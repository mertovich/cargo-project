package handlers

import (
	"api/data"
	"api/models"
	"api/tools"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"strings"

	"github.com/mertovich/BodyParser"
)

func RegisterCargo(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	if r.URL.Path != "/api/registercargo" {
		http.NotFound(w, r)
		return
	}

	bodyByte, _ := ioutil.ReadAll(r.Body)
	bodyString := string(bodyByte)
	maps := BodyParser.Parser(bodyString)

	cargo := models.Cargo{}
	cargo.Owner = strings.ReplaceAll(maps["owner"], "%20", " ")
	cargo.Adress = strings.ReplaceAll(maps["adress"], "%20", " ")
	cargo.Location = strings.ReplaceAll(maps["location"], "%20", " ")
	cargo.Status = strings.ReplaceAll(maps["status"], "%20", " ")
	cargo.ID = tools.CreateID()
	cargoJSON, _ := json.Marshal(cargo)
	if data.SaveData(cargo) {
		fmt.Fprintf(w, string(cargoJSON))
	} else {
		fmt.Fprintf(w, "Error")
	}

}

func GetCargo(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	if r.URL.Path != "/api/getcargo" {
		http.NotFound(w, r)
		return
	}

	bodyByte, _ := ioutil.ReadAll(r.Body)
	bodyString := string(bodyByte)
	maps := BodyParser.Parser(bodyString)

	cargo := data.GetCargoID(maps["id"])
	cargoJSON, _ := json.Marshal(cargo)

	fmt.Fprint(w, string(cargoJSON))
}
