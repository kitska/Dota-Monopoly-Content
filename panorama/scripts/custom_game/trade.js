(function () {
    GameEvents.Subscribe("show_trade_window", ShowTradeWindow);
    GameEvents.Subscribe("show_trade_request_dialog", ShowTradeRequestDialog);
})();

function ShowTradeWindow(event) {
    var tradeWindow = $("#TradeWindow");
    if (tradeWindow.visible) {
        return;
    }

    tradeWindow.visible = true;
    // Здесь вы можете заполнить информацию о купленных секторах и золоте игроков
}

function CloseTradeWindow() {
    $("#TradeWindow").visible = false;
}

function SendTradeRequest() {
    var targetID = $("#TradeWindow").GetAttributeInt("targetID", -1);
    if (targetID !== -1) {
        GameEvents.SendCustomGameEventToServer("send_trade_request", {targetID: targetID});
        CloseTradeWindow();
    }
}

function ShowTradeRequestDialog(event) {
    $("#TradeRequestDialog").visible = true;
}

function AcceptTradeRequest() {
    // Здесь вы можете обработать нажатие кнопки "Принять"
    $("#TradeRequestDialog").visible = false;
}

function DeclineTradeRequest() {
    // Здесь вы можете обработать нажатие кнопки "Отклонить"
    $("#TradeRequestDialog").visible = false;
}
