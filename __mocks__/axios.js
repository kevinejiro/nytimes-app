const axiosMock = jest.genMockFromModule('axios');

let mockResponse = {
    data: {
        "articles" :
        [{
            "something": "test something",
            "other" : "test other"
        }]
    }
}

axiosMock.get.mockImplementation(req);

function req() {
    return new Promise(function(resolve) {
        axiosMock.delayTimer = setTimeout(function() {
            resolve(mockResponse);
        }, 3000);
    })
}

export default axiosMock;
