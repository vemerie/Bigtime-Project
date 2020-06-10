"use strict";
const signalR = require("@microsoft/signalr");

var customerDashboardConnection = new signalR
    .HubConnectionBuilder()
    .withUrl("https://cors-anywhere.herokuapp.com/http://104.238.100.236:8010/report-api/api/boojkingsHub")
    .configureLogging(signalR.LogLevel.Information)
    .build();

var salesDashboardConnection = new signalR
    .HubConnectionBuilder()
    .withUrl("https://cors-anywhere.herokuapp.com/http://104.238.100.236:8010/report-api/api/salesHub")
    .configureLogging(signalR.LogLevel.Information)
    .build();


function start(){
customerDashboardConnection.start();
salesDashboardConnection.start();
}

customerDashboardConnection.on("currentCustomerBookingsDashboardWithData", function (model) {
    console.log("Current customer bookings dashboard");
    console.log(model);
});

salesDashboardConnection.on("currentTotalSalesByTrip", function (model) {
    console.log("Current total sales by trip");
    console.log(model);
});

salesDashboardConnection.on("currentTotalSalesByVehicle", function (model) {
    console.log("Current total sales by vehicle");
    console.log(model);
});

salesDashboardConnection.on("currentTotalSales", function (model) {
    console.log("Current total sales");
    console.log(model);
});

salesDashboardConnection.on("currentSalesByTerminal", function (model) {
    console.log("Current sales by terminal");
    console.log(model);
});

salesDashboardConnection.on("currentSalesByRoute", function (model) {
    console.log("Current sales by route");
    console.log(model);
});

customerDashboardConnection.onclose(async () => {
    await start();
});
salesDashboardConnection.onclose(async () => {
    await start();
});

async function startCustomerDashboardConnection() {
    try {
        await customerDashboardConnection.start();
        console.log("connected to customer bookings dashboard");
    } catch (err) {
        console.log(err);
        // setTimeout(() => start(), 5000);
    }
};

async function startSalesDashboardConnection() {
    try {
        await salesDashboardConnection.start();
        console.log("connected to sales dashboard");
    } catch (err) {
        console.log(err);
        // setTimeout(() => start(), 5000);
    }
};

// Start the connection.
startCustomerDashboardConnection();
startSalesDashboardConnection();