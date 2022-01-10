import { takeLatest, delay, put } from "redux-saga/effects";
import { AUTHORS } from "../../utils/constants";

import { addMessage, ADD_MESSAGE } from "./actions";

function* onAddMessage({ payload: { message, chatId } }) {
  if (message.author !== AUTHORS.BOT) {
    yield delay(1000);

    yield put(
      addMessage(
        {
          text: "iambot",
          author: AUTHORS.BOT,
          id: `msg-${Date.now()}`,
        },
        chatId
      )
    );
  }
}

export function* messagesSaga() {
  yield takeLatest(ADD_MESSAGE, onAddMessage);
}
