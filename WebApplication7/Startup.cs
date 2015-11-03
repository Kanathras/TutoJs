using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(JsTuto.Startup))]
namespace JsTuto
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
        }
    }
}