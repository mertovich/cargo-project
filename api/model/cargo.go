package model

type Cargo struct {
	ID       string `json:"id"`
	Owner    string `json:"owner"`
	Adress   string `json:"adress"`
	Location string `json:"location"`
	Status   string `json:"status"`
}
