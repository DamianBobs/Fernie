using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using static TrainingBE.Model.CWModels;

namespace TrainingBE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContainerController : ControllerBase
    {
        public static List<ShippingLeg> demoLegs = new List<ShippingLeg>
        {
            new ShippingLeg
            {
                legOrder = 1,
                atd = "2021-01-24",
                ata = "2021-03-29",
                location = "Manila, Philippines"
            },

            new ShippingLeg
            {
                legOrder = 2,
                atd = "2021-01-27",
                ata = null,
                location = "Kaohsiung, Taiwan"
            },

            new ShippingLeg
            {
                legOrder = 3,
                atd = "2021-04-15",
                ata = null,
                location = "Los Angeles, United States"
            }
        };

        public static Container demo = new Container
        {
            id = "e9c443b8-cc6d-4bd8-a1e8-dcff17499dd8",
            containerNumber = "HMMU6277266",
            status = "Empty Returned",
            etd = "2021-01-24",
            eta = "2021-03-29",
            origin = "Manila, Philippines",
            destination = "Grand Prairie, United States",
            consignee = "HAND - VEUM",
            masterAirWayBill = "(EWU) - BHHNZ",
            shippingLegs = new List<ShippingLeg>(demoLegs)
        };
        public static Container demo2 = new Container
        {
            id = "e9c443b8-cc6d-4bd8-a1e8-dcff17499dd8",
            containerNumber = "HMMU627726600000",
            status = "Empty Returned",
            etd = "2021-01-24",
            eta = "2021-03-29",
            origin = "Manila, Philippines",
            destination = "Grand Prairie, United States",
            consignee = "HAND - VEUM",
            masterAirWayBill = "(EWU) - BHHNZ",
            shippingLegs = new List<ShippingLeg>(demoLegs)
        };
        public List<Container> containerList = new List<Container>();


        [HttpGet]
        [Route("containerList")]
        public List<Container> GetDemoContainerList()
        {
            containerList.Add(demo);
            containerList.Add(demo);
            containerList.Add(demo2);
            return containerList;
        }
    }
}
