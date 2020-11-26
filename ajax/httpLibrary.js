function HttpLibrary() {
    this.xhr = new XMLHttpRequest();
}

// GET
HttpLibrary.prototype.get = function(url, callback) {
    this.xhr.open('GET', url, true);

    let self = this;
    this.xhr.onload = function() {
        if(self.xhr.status === 200) {
            callback(self.xhr.responseText);
        } else {
            callback('Error: ' + self.xhr.status);
        }
    }

    this.xhr.send();
}

// POST
HttpLibrary.prototype.post = function(url, data, callback) {
    this.xhr.open('POST', url, true);
    this.xhr.setRequestHeader('Content-type', 'application/json');

    let self = this;
    this.xhr.onload = function() {
        callback(self.xhr.responseText);
    }

    this.xhr.send(JSON.stringify(data));
}

// PUT
HttpLibrary.prototype.put = function(url, data, callback) {
    this.xhr.open('PUT', url, true);
    this.xhr.setRequestHeader('Content-type', 'application/json');

    let self = this;
    this.xhr.onload = function() {
        callback(self.xhr.responseText);
    }

    this.xhr.send(JSON.stringify(data));
}

// DELETE
HttpLibrary.prototype.delete = function(url, callback) {
    this.xhr.open('DELETE', url, true);

    let self = this;
    this.xhr.onload = function() {
        if(self.xhr.status === 200) {
            callback('Post Deleted');
        } else {
            callback('Error: ' + self.xhr.status);
        }
    }

    this.xhr.send();
}
