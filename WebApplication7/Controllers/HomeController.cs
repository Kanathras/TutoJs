using System.Web.Mvc;

namespace JsTuto.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View("index");
        }
    }
}
