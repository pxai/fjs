const login_io = IO(function(){ return document.getElementById("login").value; });

const msg_io ? map(concat("Hello"), login_io);

runIO(msg_io); // "Hello falken"

// other option for login_io so we can pass parameters
const getLogin = function(selector){ return document.getElementById(selector).value}.toIO()

runIO(msg_io); // "Hello falken"

const getBgColor = compose(get("background-color", JSON.parse));
const bgPref = compose(map(getBgColor), window.localStorage.get("preferences"));

const app = bgPref(); // IO();

runIO(app); // #efefef
