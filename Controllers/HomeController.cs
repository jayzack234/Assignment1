using Assignment1.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment1.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("Grader")]
        public IActionResult Grader()
        {
            return View();
        }

        [HttpPost("Grader")]
        public IActionResult Grader(GraderModel model)
        {
            return View();
        }
    }
}
    