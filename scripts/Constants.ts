class SERVER {
    public static PUBLIC = true;
    public static URL = SERVER.PUBLIC ? "https://cyberorioles.com" : "http://localhost:3000";
} 

export default class Constants {
    
    public static SERVER = SERVER;
}