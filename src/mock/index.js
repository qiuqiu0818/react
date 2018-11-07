import axios from "axios";
import mockAdapter from "axios-mock-adapter";

const Mock = new mockAdapter(axios);

Mock.onGet("/strategyList").reply(200, {
    code: 0,
    data: 1
})