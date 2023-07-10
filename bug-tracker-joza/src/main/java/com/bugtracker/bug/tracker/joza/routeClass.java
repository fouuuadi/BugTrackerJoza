import org.springframework.web.bind.annotation.GetMapping;
/*
une annotation utilisée pour mapper une méthode de contrôleur à une requête HTTP GET.
Elle indique que la méthode annotée doit être appelée lorsque le serveur reçoit une requête
GET correspondante à l'URI spécifié.
*/
import org.springframework.web.bind.annotation.RequestMapping;
/*
une annotation plus générique utilisée pour mapper une méthode de contrôleur à une requête HTTP.
Elle permet de définir des conditions supplémentaires telles que les méthodes HTTP acceptées, les en-têtes,
les paramètres, etc. Cependant, dans l'exemple spécifique que vous avez fourni, @RequestMapping n'est pas utilisé directement,
mais il est souvent utilisé pour définir un chemin de base pour tous les endpoints du contrôleur.
*/
import org.springframework.web.bind.annotation.RestController;
/*
une annotation qui combine les fonctionnalités des annotations @Controller et @ResponseBody.
Elle indique que la classe annotée est un contrôleur REST qui traite les requêtes HTTP entrantes et
renvoie des réponses en utilisant le format de données approprié (généralement JSON).
*/

//On commence par crée la class

class routeClass
{

}
