using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace CoffeeShop.Controllers
{
    public class CoffeeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
