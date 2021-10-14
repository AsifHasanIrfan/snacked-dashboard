import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Doughnut } from 'react-chartjs-2';
import PieChartServerLoad from '../DashboartLibreries/PieChartServerLoad';

const Dashboard = () => {
   const options = {
      series: [{
         name: "Total Orders",
         data: [240, 160, 671, 414, 555, 257]
      }],
      chart: {
         type: "line",
         //width: 100%,
         height: 40,
         toolbar: {
            show: !1
         },
         zoom: {
            enabled: !1
         },
         dropShadow: {
            enabled: 0,
            top: 3,
            left: 14,
            blur: 4,
            opacity: .12,
            color: "#3461ff"
         },
         sparkline: {
            enabled: !0
         }
      },
      markers: {
         size: 0,
         colors: ["#3461ff"],
         strokeColors: "#fff",
         strokeWidth: 2,
         hover: {
            size: 7
         }
      },
      plotOptions: {
         bar: {
            horizontal: !1,
            columnWidth: "35%",
            endingShape: "rounded"
         }
      },
      dataLabels: {
         enabled: !1
      },
      stroke: {
         show: !0,
         width: 2.5,
         curve: "smooth"
      },
      colors: ["#fff"],
      xaxis: {
         categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      },
      fill: {
         opacity: 1
      },
      tooltip: {
         theme: "dark",
         fixed: {
            enabled: !1
         },
         x: {
            show: !1
         },
         y: {
            title: {
               formatter: function(e) {
                  return ""
               }
            }
         },
         marker: {
            show: !1
         }
      }
     };
   
   const series = [{
		name: "Total Orders",
		data: [240, 160, 671, 414, 555, 257]
	}];

   const ordersOptions = {
      chart: {
          foreColor: '#9a9797',
          type: "area",
          //width: 130,
          height: 350,
          toolbar: {
              show: !1
          },
          zoom: {
              enabled: !1
          },
          dropShadow: {
              enabled: 0,
              top: 3,
              left: 15,
              blur: 4,
              opacity: .22,
              color: "#12bf24"
          },
          sparkline: {
              enabled: !1
          }
      },
      markers: {
          size: 0,
          colors: ["#12bf24"],
          strokeColors: "#fff",
          strokeWidth: 2,
          hover: {
              size: 7
          }
      },
      plotOptions: {
          bar: {
              horizontal: !1,
              columnWidth: "35%",
              endingShape: "rounded"
          }
      },
      dataLabels: {
          enabled: !1
      },
      stroke: {
          show: !0,
          width: 3,
          curve: "straight"
      },
      colors: ["#12bf24"],
      xaxis: {
          categories: ["1", "2", "3", "4", "5", "6", "7"]
      },
      tooltip: {
          theme: "dark",
          fixed: {
              enabled: !1
          },
          x: {
              show: !1
          },
          y: {
              title: {
                  formatter: function(e) {
                      return ""
                  }
              }
          },
          marker: {
              show: !1
          }
      }
    };

   const  ordersSeries = [{
      name: "Orders",
      data: [15, 400, 340, 750, 371, 814, 1055]
  }];

  const trafficOptions = {
	chart: {
		type: "bar",
		//stacked: true,
		//width: 100%,
		height: 340,
		toolbar: {
			show: !1
		},
		zoom: {
			enabled: !1
		},
		dropShadow: {
			enabled: 0,
			top: 3,
			left: 14,
			blur: 4,
			opacity: .12,
			color: "#32bfff"
		},
		sparkline: {
			enabled: !1
		}
	},
	markers: {
		size: 0,
		colors: ["#32bfff"],
		strokeColors: "#fff",
		strokeWidth: 2,
		hover: {
			size: 7
		}
	},
	plotOptions: {
		bar: {
			horizontal: !1,
			columnWidth: "45%",
			endingShape: "rounded"
		}
	},
	dataLabels: {
		enabled: !1
	},
	stroke: {
		show: !0,
		width: 0,
		curve: "smooth"
	},
	fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: "vertical",
          shadeIntensity: 0.5,
          gradientToColors: ["#3361ff", "#c1cfff"],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          //stops: [0, 50, 100],
          //colorStops: []
        }
    },
	colors: ["#3361ff", "#c1cfff"],
	xaxis: {
		categories: ["1", "2", "3", "4", "5", "6", "7"]
	},
	legend: {
		show: false
	  },
	tooltip: {
		enabled: !0,
		theme: "dark",
	}
  };

  const trafficSeries = [{
   name: "Referral",
   data: [640, 560, 871, 614, 755, 457, 650]
},{
   name: "Search",
   data: [440, 360, 671, 414, 555, 257, 450]
}];

const salesOptions = {
	chart: {
		type: "area",
		//width: 100%,
		height: 320,
      stacked: true,
		toolbar: {
			show: !1
		},
		zoom: {
			enabled: !1
		},
		dropShadow: {
			enabled: 0,
			top: 3,
			left: 14,
			blur: 4,
			opacity: .12,
			color: "#32bfff"
		},
		sparkline: {
			enabled: !0
		}
	},
	markers: {
		size: 0,
		colors: ["#32bfff"],
		strokeColors: "#fff",
		strokeWidth: 2,
		hover: {
			size: 7
		}
	},
	plotOptions: {
		bar: {
			horizontal: !1,
			columnWidth: "35%",
			endingShape: "rounded"
		}
	},
	dataLabels: {
		enabled: !1
	},
	stroke: {
		show: !0,
		width: 2,
		curve: "smooth"
	},
	fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: "vertical",
          shadeIntensity: 0.5,
          gradientToColors: ["#3361ff", "#8ea8fd", "#c1cfff"],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          //stops: [0, 50, 100],
          //colorStops: []
        }
    },
	colors: ["#3361ff", "#8ea8fd", "#c1cfff"],
	xaxis: {
		categories: ["1", "2", "3", "4", "5", "6", "7"]
	},
	tooltip: {
		enabled: !1,
		theme: "dark",
		fixed: {
			enabled: !1
		},
		x: {
			show: !1
		},
		y: {
			title: {
				formatter: function(e) {
					return ""
				}
			}
		},
		marker: {
			show: !1
		}
	}
  };
  const salesSeries = [{
   name: "iPad",
   data: [240, 160, 471, 214, 355, 57, 250]
},{
   name: "Mobiles",
   data: [440, 360, 671, 414, 555, 257, 450]
},{
   name: "Laptops",
   data: [640, 560, 871, 614, 755, 457, 650]
}];

const bonusOptions = {
   series: [{
       name: "Bounce Rate",
       data: [240, 160, 671, 414, 555, 257, 901, 555, 257]
   }],
   chart: {
       type: "area",
      // width: 130,
       height: 20,
       toolbar: {
           show: !1
       },
       zoom: {
           enabled: !1
       },
       dropShadow: {
           enabled: 0,
           top: 3,
           left: 14,
           blur: 4,
           opacity: .12,
           color: "#3461ff"
       },
       sparkline: {
           enabled: !0
       }
   },
   markers: {
       size: 0,
       colors: ["#3461ff"],
       strokeColors: "#fff",
       strokeWidth: 2,
       hover: {
           size: 7
       }
   },
   plotOptions: {
       bar: {
           horizontal: !1,
           columnWidth: "35%",
           endingShape: "rounded"
       }
   },
   dataLabels: {
       enabled: !1
   },
   stroke: {
       show: !0,
       width: 2.5,
       curve: "smooth"
   },
   colors: ["#3461ff"],
   xaxis: {
       categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
   },
   fill: {
       opacity: 1
   },
   tooltip: {
       theme: "dark",
       fixed: {
           enabled: !1
       },
       x: {
           show: !1
       },
       y: {
           title: {
               formatter: function(e) {
                   return ""
               }
           }
       },
       marker: {
           show: !1
       }
   }
 };

 const clickOptions = {
	series: [{
		name: "Total Clicks",
		data: [0, 160, 671, 414, 555, 257, 901, 613, 727, 414, 555, 0]
	}],
	chart: {
		type: "area",
		//width: 130,
		height: 80,
		toolbar: {
			show: !1
		},
		zoom: {
			enabled: !1
		},
		dropShadow: {
			enabled: 0,
			top: 3,
			left: 14,
			blur: 4,
			opacity: .12,
			color: "#3361ff"
		},
		sparkline: {
			enabled: !0
		}
	},
	markers: {
		size: 0,
		colors: ["#3361ff"],
		strokeColors: "#fff",
		strokeWidth: 2,
		hover: {
			size: 7
		}
	},
	plotOptions: {
		bar: {
			horizontal: !1,
			columnWidth: "35%",
			endingShape: "rounded"
		}
	},
	dataLabels: {
		enabled: !1
	},
	stroke: {
		show: !0,
		width: 2.5,
		curve: "straight"
	},
	xaxis: {
		categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
	},
	fill: {
		type: 'gradient',
		gradient: {
		  shade: 'light',
		  type: 'horizontal',
		  shadeIntensity: 0.5,
		  gradientToColors: ['#3461ff'],
		  inverseColors: false,
		  opacityFrom: 1,
		  opacityTo: 1,
		  stops: [0, 100]
		}
	  },
	colors: ["#3461ff"],
	tooltip: {
		theme: "dark",
		fixed: {
			enabled: !1
		},
		x: {
			show: !1
		},
		y: {
			title: {
				formatter: function(e) {
					return ""
				}
			}
		},
		marker: {
			show: !1
		}
	}
  };

 const montlyOptions = {
	series: [{
		name: "Sales",
		data: [300, 555, 257, 901, 613, 727, 314]
	}],
	chart: {
		type: "area",
		//width: 130,
		height: 160,
		toolbar: {
			show: !1
		},
		zoom: {
			enabled: !1
		},
		dropShadow: {
			enabled: 0,
			top: 3,
			left: 14,
			blur: 4,
			opacity: .12,
			color: "#3361ff"
		},
		sparkline: {
			enabled: !1
		}
	},
	markers: {
		size: 0,
		colors: ["#3361ff"],
		strokeColors: "#fff",
		strokeWidth: 2,
		hover: {
			size: 7
		}
	},
	plotOptions: {
		bar: {
			horizontal: !1,
			columnWidth: "35%",
			endingShape: "rounded"
		}
	},
	dataLabels: {
		enabled: !1
	},
	stroke: {
		show: !0,
		width: 2.5,
		curve: "straight"
	},
	xaxis: {
		categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
		axisBorder: {
			show: false
		}
	},
	grid: {
		show: !1
	},
	fill: {
		type: 'gradient',
		gradient: {
		  shade: 'light',
		  type: 'vertical',
		  shadeIntensity: 0.5,
		  gradientToColors: ['#3461ff'],
		  inverseColors: false,
		  opacityFrom: 0.5,
		  opacityTo: 0.0,
		  //stops: [0, 100]
		}
	  },
	colors: ["#3461ff"],
	yaxis: {
		show: false
	},
	tooltip: {
		theme: "dark",
		fixed: {
			enabled: !1
		},
		x: {
			show: !1
		},
		y: {
			title: {
				formatter: function(e) {
					return ""
				}
			}
		},
		marker: {
			show: !1
		}
	}
  };

  const sessionOptions = {
	series: [{
		name: "Sessions",
		data: [300, 450, 671, 414, 555, 457, 901, 613, 727, 414, 555, 290]
	}],
	chart: {
		type: "bar",
		//width: 130,
		height: 80,
		toolbar: {
			show: !1
		},
		zoom: {
			enabled: !1
		},
		dropShadow: {
			enabled: 0,
			top: 3,
			left: 14,
			blur: 4,
			opacity: .12,
			color: "#3361ff"
		},
		sparkline: {
			enabled: !0
		}
	},
	markers: {
		size: 0,
		colors: ["#3361ff"],
		strokeColors: "#fff",
		strokeWidth: 2,
		hover: {
			size: 7
		}
	},
	plotOptions: {
		bar: {
			horizontal: !1,
			columnWidth: "35%",
			endingShape: "rounded"
		}
	},
	dataLabels: {
		enabled: !1
	},
	stroke: {
		show: !0,
		width: 2.5,
		curve: "smooth"
	},
	xaxis: {
		categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
	},
	fill: {
		type: 'gradient',
		gradient: {
		  shade: 'light',
		  type: 'horizontal',
		  shadeIntensity: 0.5,
		  gradientToColors: ['#3461ff'],
		  inverseColors: false,
		  opacityFrom: 1,
		  opacityTo: 1,
		  stops: [0, 100]
		}
	  },
	colors: ["#3461ff"],
	tooltip: {
		theme: "dark",
		fixed: {
			enabled: !1
		},
		x: {
			show: !1
		},
		y: {
			title: {
				formatter: function(e) {
					return ""
				}
			}
		},
		marker: {
			show: !1
		}
	}
  };

  const visitorOptions = {
   series: [{
       name: "Returning Visitors",
       data: [340, 278, 857, 414, 555, 567, 901, 555, 257, 560, 671, 414]
   },{
       name: "Old Visitors",
       data: [240, 660, 171, 257, 160, 671, 340, 594, 555, 632, 901, 555]
   }],
   chart: {
       type: "bar",
      // width: 130,
      //stacked: true,
       height: 260,
       toolbar: {
           show: !1
       },
       zoom: {
           enabled: !1
       },
       dropShadow: {
           enabled: 0,
           top: 3,
           left: 14,
           blur: 4,
           opacity: .12,
           color: "#3461ff"
       },
       sparkline: {
           enabled: !1
       }
   },
   markers: {
       size: 0,
       colors: ["#3461ff"],
       strokeColors: "#fff",
       strokeWidth: 2,
       hover: {
           size: 7
       }
   },
   plotOptions: {
       bar: {
           horizontal: !1,
           columnWidth: "45%",
           endingShape: "rounded"
       }
   },
   dataLabels: {
       enabled: !1
   },
   stroke: {
       show: !0,
       width: 1.5,
     colors: ["#fff"],
       curve: "smooth"
   },
   colors: ["#3461ff", "#c1cfff"],
   xaxis: {
       categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
   },
  responsive: [
     {
       breakpoint: 1000,
       options: {
        chart: {
           type: "bar",
           // width: 130,
           stacked: true,
        }
       }
     }
    ],
  legend: {
     show: false
    },
   tooltip: {
       theme: "dark"        
   }
 };

 const serverOptions = {
	chart: {
	  height: 240,
	  type: 'radialBar',
	  toolbar: {
		show: false
	  }
	},
	plotOptions: {
	  radialBar: {
		//startAngle: -135,
		//endAngle: 225,
		 hollow: {
		  margin: 0,
		  size: '80%',
		  background: 'transparent',
		  image: undefined,
		  imageOffsetX: 0,
		  imageOffsetY: 0,
		  position: 'front',
		  dropShadow: {
			enabled: false,
			top: 3,
			left: 0,
			blur: 4,
			color: 'rgba(0, 169, 255, 0.85)',
			opacity: 0.65
		  }
		},
		track: {
		  background: '#eee',
		  strokeWidth: '67%',
		  margin: 0, // margin is in pixels
		  dropShadow: {
			enabled: false,
			top: -3,
			left: 0,
			blur: 4,
			color: 'rgba(0, 169, 255, 0.85)',
			opacity: 0.65
		  }
		},

		dataLabels: { 
		  showOn: 'always',
		  name: {
			offsetY: -20,
			show: true,
			color: '#212529',
			fontSize: '14px'
		  },
		  value: {
			formatter: function (val) {
					  return val + "%";
				  },
			color: '#212529',
			fontSize: '35px',
			show: true,
			offsetY: 10,
		  }
		}
	  }
	},
	fill: {
	  type: 'gradient',
	  gradient: {
		shade: 'light',
		type: 'horizontal',
		shadeIntensity: 0.5,
		gradientToColors: ['#3461ff'],
		inverseColors: false,
		opacityFrom: 1,
		opacityTo: 1,
		stops: [0, 100]
	  }
	},
	colors: ["#3461ff"],
	series: [55],
	stroke: {
	  lineCap: 'round',
	  //dashArray: 4
	},
	labels: ['Server Load'],
	responsive: [
		{
		  breakpoint: 1281,
		  options: {
			chart: {
				height: 220,
			}
		  }
		}
	  ],

  }

  const  bandWidthOptions = {
	chart: {
	  height: 240,
	  type: 'radialBar',
	  toolbar: {
		show: false
	  }
	},
	plotOptions: {
	  radialBar: {
		//startAngle: -135,
		//endAngle: 225,
		 hollow: {
		  margin: 0,
		  size: '80%',
		  background: 'transparent',
		  image: undefined,
		  imageOffsetX: 0,
		  imageOffsetY: 0,
		  position: 'front',
		  dropShadow: {
			enabled: false,
			top: 3,
			left: 0,
			blur: 4,
			color: 'rgba(0, 169, 255, 0.85)',
			opacity: 0.65
		  }
		},
		track: {
		  background: '#eee',
		  strokeWidth: '67%',
		  margin: 0, // margin is in pixels
		  dropShadow: {
			enabled: false,
			top: -3,
			left: 0,
			blur: 4,
			color: 'rgba(0, 169, 255, 0.85)',
			opacity: 0.65
		  }
		},

		dataLabels: { 
		  showOn: 'always',
		  name: {
			offsetY: -20,
			show: true,
			color: '#212529',
			fontSize: '14px'
		  },
		  value: {
			formatter: function (val) {
					  return val + "%";
				  },
			color: '#212529',
			fontSize: '35px',
			show: true,
			offsetY: 10,
		  }
		}
	  }
	},
	fill: {
	  type: 'gradient',
	  gradient: {
		shade: 'light',
		type: 'horizontal',
		shadeIntensity: 0.5,
		gradientToColors: ['#3461ff'],
		inverseColors: false,
		opacityFrom: 1,
		opacityTo: 1,
		stops: [0, 100]
	  }
	},
	colors: ["#3461ff"],
	series: [64],
	stroke: {
	  lineCap: 'round',
	  //dashArray: 4
	},
	labels: ['Bandwidth'],
	responsive: [
		{
		  breakpoint: 1281,
		  options: {
			chart: {
				height: 220,
			}
		  }
		}
	  ],

  }

  const diskOptions = {
	chart: {
	  height: 240,
	  type: 'radialBar',
	  toolbar: {
		show: false
	  }
	},
	plotOptions: {
	  radialBar: {
		//startAngle: -135,
		//endAngle: 225,
		 hollow: {
		  margin: 0,
		  size: '80%',
		  background: 'transparent',
		  image: undefined,
		  imageOffsetX: 0,
		  imageOffsetY: 0,
		  position: 'front',
		  dropShadow: {
			enabled: false,
			top: 3,
			left: 0,
			blur: 4,
			color: 'rgba(0, 169, 255, 0.85)',
			opacity: 0.65
		  }
		},
		track: {
		  background: '#eee',
		  strokeWidth: '67%',
		  margin: 0, // margin is in pixels
		  dropShadow: {
			enabled: false,
			top: -3,
			left: 0,
			blur: 4,
			color: 'rgba(0, 169, 255, 0.85)',
			opacity: 0.65
		  }
		},

		dataLabels: { 
		  showOn: 'always',
		  name: {
			offsetY: -20,
			show: true,
			color: '#212529',
			fontSize: '14px'
		  },
		  value: {
			formatter: function (val) {
					  return val + "%";
				  },
			color: '#212529',
			fontSize: '35px',
			show: true,
			offsetY: 10,
		  }
		}
	  }
	},
	fill: {
	  type: 'gradient',
	  gradient: {
		shade: 'light',
		type: 'horizontal',
		shadeIntensity: 0.5,
		gradientToColors: ['#3461ff'],
		inverseColors: false,
		opacityFrom: 1,
		opacityTo: 1,
		stops: [0, 100]
	  }
	},
	colors: ["#3461ff"],
	series: [78],
	stroke: {
	  lineCap: 'round',
	  //dashArray: 4
	},
	labels: ['Disksapce'],
	responsive: [
		{
		  breakpoint: 1281,
		  options: {
			chart: {
				height: 220,
			}
		  }
		}
	  ],

  }

  return (
    <>
      <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-4">
        <div class="col">
          <div class="card overflow-hidden radius-10">
            <div class="card-body p-2">
              <div class="d-flex align-items-stretch justify-content-between radius-10 overflow-hidden">
                <div class="w-50 p-3 bg-light-primary">
                  <p>Total Orders</p>
                  <h4 class="text-primary">8,542</h4>
                </div>
                <div class="w-50 bg-primary p-3">
                  <p class="mb-3 text-white">+ 16% <i class="bi bi-arrow-up"></i></p>
                  <ReactApexChart series={series} options={options} type="line" height={50} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card overflow-hidden radius-10">
            <div class="card-body p-2">
              <div class="d-flex align-items-stretch justify-content-between radius-10 overflow-hidden">
                <div class="w-50 p-3 bg-light-primary">
                  <p>Total Views</p>
                  <h4 class="text-primary">12.5M</h4>
                </div>
                <div class="w-50 bg-primary p-3">
                  <p class="mb-3 text-white">- 3.4% <i class="bi bi-arrow-down"></i></p>
                  <ReactApexChart series={series} options={options} type="line" height={50} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card overflow-hidden radius-10">
            <div class="card-body p-2">
              <div class="d-flex align-items-stretch justify-content-between radius-10 overflow-hidden">
                <div class="w-50 p-3 bg-light-primary">
                  <p>Revenue</p>
                  <h4 class="text-primary">$64.5K</h4>
                </div>
                <div class="w-50 bg-primary p-3">
                  <p class="mb-3 text-white">+ 24% <i class="bi bi-arrow-up"></i></p>
                  <ReactApexChart series={series} options={options} type="line" height={50} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card overflow-hidden radius-10">
            <div class="card-body p-2">
              <div class="d-flex align-items-stretch justify-content-between radius-10 overflow-hidden">
                <div class="w-50 p-3 bg-light-primary">
                  <p>Customers</p>
                  <h4 class="text-primary">25.8K</h4>
                </div>
                <div class="w-50 bg-primary p-3">
                  <p class="mb-3 text-white">+ 8.2% <i class="bi bi-arrow-up"></i></p>
                  <ReactApexChart series={series} options={options} type="line" height={50} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="row">
        <div class="col-12 col-lg-6 col-xl-6 col-xxl-4 d-flex">
          <div class="card radius-10 bg-transparent shadow-none w-100">
            <div class="card-body p-0">
              <div class="card radius-10">
                <div class="card-body">
                  <div class="d-flex align-items-center">
                    <h6 class="mb-0">By Device</h6>
                    <div class="fs-5 ms-auto dropdown">
                      <div class="dropdown-toggle dropdown-toggle-nocaret cursor-pointer" data-bs-toggle="dropdown"><i
                        class="bi bi-three-dots"></i></div>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="javascript">Action</a></li>
                        <li><a class="dropdown-item" href="javascript">Another action</a></li>
                        <li>
                          <hr class="dropdown-divider" />
                        </li>
                        <li><a class="dropdown-item" href="javascript">Something else here</a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="row row-cols-1 row-cols-md-2 mt-3 g-3">
                    <div class="col">
                      <div class="by-device-container">
                      <Doughnut data={{
                        labels: ["Mobile", "Desktop", "Tablet"],
                        datasets: [{
                           label: "Device Users",
                           backgroundColor: ["#8ea8fd", "#3461ff", "#c1cfff"],
                           data: [2478, 5267, 1834],
                        }],
                      }}
                      options={{
                        maintainAspectRatio: false,
                        cutoutPercentage: 77,
                        plugins: {
                           legend: {
                              position: 'bottom',
                              display: false,
                              labels: {
                                 boxWidth: 5,
                              }
                           }},
                        tooltips: {
                          displayColors:false,
                        },
                     }}
                      />
                      
                      </div>
                    </div>
                    <div class="col">
                      <div class="">
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item d-flex align-items-center justify-content-between border-0">
                            <i class="bi bi-tablet-landscape-fill me-2 text-primary"></i> <span>Tablet - </span>
                            <span>22.5%</span>
                          </li>
                          <li class="list-group-item d-flex align-items-center justify-content-between border-0">
                            <i class="bi bi-phone-fill me-2 text-primary-2"></i> <span>Mobile - </span>
                            <span>62.3%</span>
                          </li>
                          <li class="list-group-item d-flex align-items-center justify-content-between border-0">
                            <i class="bi bi-display-fill me-2 text-primary-3"></i> <span>Desktop - </span>
                            <span>15.2%</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card radius-10 w-100 mb-0 overflow-hidden">
                <div class="card-body">
                  <div class="d-flex align-items-center">
                    <h6 class="mb-0">Sales</h6>
                    <div class="fs-5 ms-auto">
                      <div class="d-flex align-items-center justify-content-sm-end gap-3 cursor-pointer">
                        <div class="font-13"><i class="bi bi-circle-fill text-primary"></i><span
                          class="ms-2">iPad</span></div>
                        <div class="font-13"><i class="bi bi-circle-fill text-primary-2"></i><span
                          class="ms-2">Mob</span></div>
                        <div class="font-13"><i class="bi bi-circle-fill text-primary-3"></i><span
                          class="ms-2">Lap</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="chart6">
                  <ReactApexChart options={salesOptions} series={salesSeries} type="area" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6 col-xl-6 col-xxl-4 d-flex">
          <div class="card radius-10 w-100 overflow-hidden">
            <div class="card-body">
              <div class="d-flex align-items-center">
                <h6 class="mb-0">Orders</h6>
                <div class="fs-5 ms-auto dropdown">
                  <div class="dropdown-toggle dropdown-toggle-nocaret cursor-pointer" data-bs-toggle="dropdown"><i
                    class="bi bi-three-dots"></i></div>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="javascript">Action</a></li>
                    <li><a class="dropdown-item" href="javascript">Another action</a></li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li><a class="dropdown-item" href="javascript">Something else here</a></li>
                  </ul>
                </div>
              </div>
              <div id="chart7">
                 <ReactApexChart options={ordersOptions} series={ordersSeries} type="area"  />
              </div>
              <div class="d-flex align-items-center gap-5 justify-content-center mt-4 p-3 bg-light radius-10 border">
                <div class="text-center">
                  <h2 class="mb-3 text-primary">9.32m</h2>
                  <p>Total <br /> Orders</p>
                </div>
                <div class="border-end sepration"></div>
                <div class="text-center">
                  <h2 class="mb-3">2.56</h2>
                  <p>AVG per <br /> Customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-12 col-xl-12 col-xxl-4 d-flex">
          <div class="w-100">
            <div class="card radius-10">
              <div class="card-body">
                <div class="d-flex align-items-center">
                  <h6 class="mb-0">Traffic</h6>
                  <div class="fs-5 ms-auto">
                    <div class="d-flex align-items-center justify-content-sm-end gap-3 cursor-pointer">
                      <div class="font-13"><i class="bi bi-circle-fill text-primary"></i><span
                        class="ms-2">Referral</span></div>
                      <div class="font-13"><i class="bi bi-circle-fill text-primary-3"></i><span
                        class="ms-2">Search</span></div>
                    </div>
                  </div>
                </div>
                <div id="chart8">
                   <ReactApexChart options={trafficOptions} series={trafficSeries} type="bar" />
                </div>
              </div>
            </div>
            <div class="card radius-10">
              <div class="card-body">
                <div class="d-flex align-items-center">
                  <div class="">
                    <p class="mb-1">Bounce Rate</p>
                    <h4 class="mb-0 text-primary">24.8%</h4>
                  </div>
                  <div class="dropdown ms-auto">
                    <div class="dropdown-toggle dropdown-toggle-nocaret cursor-pointer" data-bs-toggle="dropdown"><i
                      class="bi bi-three-dots fs-4"></i>
                    </div>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="javascript">Action</a>
                      </li>
                      <li><a class="dropdown-item" href="javascript">Another action</a>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li><a class="dropdown-item" href="javascript">Something else here</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div id="chart9">
                  <ReactApexChart options={bonusOptions} series={bonusOptions.series} type="area" height={120} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="row">
        <div class="col-12 col-lg-12 col-xl-4 d-flex">
          <div class="card w-100 radius-10">
            <div class="card-body">
              <div class="card radius-10 border shadow-none">
                <div class="card-body pb-0">
                  <div class="d-flex align-items-center">
                    <div class="">
                      <h6 class="mb-0">Monthly Sales</h6>
                    </div>
                    <div class="fs-5 ms-auto dropdown">
                      <div class="dropdown-toggle dropdown-toggle-nocaret cursor-pointer" data-bs-toggle="dropdown"><i
                        class="bi bi-three-dots"></i></div>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="javascript">Action</a></li>
                        <li><a class="dropdown-item" href="javascript">Another action</a></li>
                        <li>
                          <hr class="dropdown-divider" />
                        </li>
                        <li><a class="dropdown-item" href="javascript">Something else here</a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="mt-0">
                    <div class="widget-icon mx-auto mb-2 bg-light-primary text-primary">
                      <i class="bi bi-bank2"></i>
                    </div>
                    <h4 class="mb-0 text-center">$45,865</h4>
                  </div>
                  <div id="chart15">
                     <ReactApexChart options={montlyOptions} series={montlyOptions.series} type="area" height={160} />
                  </div>
                </div>
              </div>
              <div class="card radius-10 border shadow-none">
                <div class="card-body">
                  <div class="d-flex align-items-center">
                    <div class="">
                      <h6 class="mb-0">Total Clicks</h6>
                    </div>
                    <div class="fs-5 ms-auto dropdown">
                      <div class="dropdown-toggle dropdown-toggle-nocaret cursor-pointer" data-bs-toggle="dropdown"><i
                        class="bi bi-three-dots"></i></div>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="javascript">Action</a></li>
                        <li><a class="dropdown-item" href="javascript">Another action</a></li>
                        <li>
                          <hr class="dropdown-divider" />
                        </li>
                        <li><a class="dropdown-item" href="javascript">Something else here</a></li>
                      </ul>
                    </div>
                  </div>
                  <div id="chart14">
                     <ReactApexChart options={clickOptions} series={clickOptions.series} type="area" height={80} />
                  </div>
                </div>
              </div>
              <div class="card radius-10 border shadow-none mb-0">
                <div class="card-body">
                  <div class="d-flex align-items-center">
                    <div class="">
                      <h6 class="mb-0">Sessions</h6>
                    </div>
                    <div class="fs-5 ms-auto dropdown">
                      <div class="dropdown-toggle dropdown-toggle-nocaret cursor-pointer" data-bs-toggle="dropdown"><i
                        class="bi bi-three-dots"></i></div>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="javascript">Action</a></li>
                        <li><a class="dropdown-item" href="javascript">Another action</a></li>
                        <li>
                          <hr class="dropdown-divider" />
                        </li>
                        <li><a class="dropdown-item" href="javascript">Something else here</a></li>
                      </ul>
                    </div>
                  </div>
                  <div id="chart16">
                     <ReactApexChart options={sessionOptions} series={sessionOptions.series} type="bar" height={80} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-12 col-xl-8 d-flex">
          <div class="w-100">
            <div class="row">
              <div class="col-12 col-lg-12 col-xl-12">
                <div class="card radius-10">
                  <div class="card-body">
                    <div class="d-flex align-items-center">
                      <h6 class="mb-0">Visitors</h6>
                      <div class="fs-5 ms-auto dropdown">
                        <div class="dropdown-toggle dropdown-toggle-nocaret cursor-pointer" data-bs-toggle="dropdown"><i
                          class="bi bi-three-dots"></i></div>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="javascript">Action</a></li>
                          <li><a class="dropdown-item" href="javascript">Another action</a></li>
                          <li>
                            <hr class="dropdown-divider" />
                          </li>
                          <li><a class="dropdown-item" href="javascript">Something else here</a></li>
                        </ul>
                      </div>
                    </div>
                    <div class="d-sm-flex align-items-center gap-3 mt-3">
                      <div class="mb-2 mb-sm-0">
                        <h4 class="mb-0">254,852</h4>
                        <p class="mb-0">New / Returning</p>
                      </div>
                      <div class="d-none d-sm-block border-end sepration-2"></div>
                      <div class="align-self-end mb-2 mb-sm-0">
                        <p class="mb-0">45,762 / 2,491</p>
                      </div>
                      <div class="align-self-end ms-auto">
                        <div class="d-flex align-items-center gap-3">
                          <p class="mb-0 font-13">
                            <i class="bi bi-square-fill ms-1 text-primary"></i> New Visitors
                          </p>
                          <p class="mb-0 font-13">
                            <i class="bi bi-square-fill ms-1 text-primary-3"></i> Returning Visitors
                          </p>
                        </div>
                      </div>
                    </div>
                    <div id="chart10">
                     <ReactApexChart options={visitorOptions} series={visitorOptions.series} type="bar" height={260} />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-4 col-xl-4">
                <div class="card radius-10">
                  <div class="card-body">
                  <div id="chart11">  
                  <ReactApexChart options={serverOptions} series={serverOptions.series} type="radialBar" height={240} />
                  </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-4 col-xl-4">
                <div class="card radius-10">
                  <div class="card-body">
                    <div id="chart12">
                    <ReactApexChart options={bandWidthOptions} series={bandWidthOptions.series} type="radialBar" height={240} />
                    
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-4 col-xl-4">
                <div class="card radius-10">
                  <div class="card-body">
                    <div id="chart13">
                    <ReactApexChart options={diskOptions} series={diskOptions.series} type="radialBar" height={240} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="row">
        <div class="col-12 col-lg-12 col-xl-8 d-flex">
          <div class="card radius-10 w-100">
            <div class="card-header bg-transparent">
              <div class="row g-3 align-items-center">
                <div class="col">
                  <h5 class="mb-0">Recent Orders</h5>
                </div>
                <div class="col">
                  <div class="d-flex align-items-center justify-content-end gap-3 cursor-pointer">
                    <div class="dropdown">
                      <a class="dropdown-toggle dropdown-toggle-nocaret" href="javascript" data-bs-toggle="dropdown"
                        aria-expanded="false"><i class="bx bx-dots-horizontal-rounded font-22 text-option"></i>
                      </a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="javascript">Action</a>
                        </li>
                        <li><a class="dropdown-item" href="javascript">Another action</a>
                        </li>
                        <li>
                          <hr class="dropdown-divider" />
                        </li>
                        <li><a class="dropdown-item" href="javascript">Something else here</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table align-middle mb-0">
                  <thead class="table-light">
                    <tr>
                      <th>javascriptID</th>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>javascript89742</td>
                      <td>
                        <div class="d-flex align-items-center gap-3">
                          <div class="product-box border">
                            <img src="assets/images/products/11.png" alt="" />
                          </div>
                          <div class="product-info">
                            <h6 class="product-name mb-1">Smart Mobile Phone</h6>
                          </div>
                        </div>
                      </td>
                      <td>2</td>
                      <td>$214</td>
                      <td>Apr 8, 2021</td>
                      <td>
                        <div class="d-flex align-items-center gap-3 fs-6">
                          <a href="javascript" class="text-primary" data-bs-toggle="tooltip"
                            data-bs-placement="bottom" title="" data-bs-original-title="View detail"
                            aria-label="Views"><i class="bi bi-eye-fill"></i></a>
                          <a href="javascript" class="text-warning" data-bs-toggle="tooltip"
                            data-bs-placement="bottom" title="" data-bs-original-title="Edit info" aria-label="Edit"><i
                              class="bi bi-pencil-fill"></i></a>
                          <a href="javascript" class="text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom"
                            title="" data-bs-original-title="Delete" aria-label="Delete"><i
                              class="bi bi-trash-fill"></i></a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>javascript68570</td>
                      <td>
                        <div class="d-flex align-items-center gap-3">
                          <div class="product-box border">
                            <img src="assets/images/products/07.png" alt="" />
                          </div>
                          <div class="product-info">
                            <h6 class="product-name mb-1">Sports Time Watch</h6>
                          </div>
                        </div>
                      </td>
                      <td>1</td>
                      <td>$185</td>
                      <td>Apr 9, 2021</td>
                      <td>
                        <div class="d-flex align-items-center gap-3 fs-6">
                          <a href="javascript" class="text-primary" data-bs-toggle="tooltip"
                            data-bs-placement="bottom" title="" data-bs-original-title="View detail"
                            aria-label="Views"><i class="bi bi-eye-fill"></i></a>
                          <a href="javascript" class="text-warning" data-bs-toggle="tooltip"
                            data-bs-placement="bottom" title="" data-bs-original-title="Edit info" aria-label="Edit"><i
                              class="bi bi-pencil-fill"></i></a>
                          <a href="javascript" class="text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom"
                            title="" data-bs-original-title="Delete" aria-label="Delete"><i
                              class="bi bi-trash-fill"></i></a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>javascript38567</td>
                      <td>
                        <div class="d-flex align-items-center gap-3">
                          <div class="product-box border">
                            <img src="assets/images/products/17.png" alt="" />
                          </div>
                          <div class="product-info">
                            <h6 class="product-name mb-1">Women Red Heals</h6>
                          </div>
                        </div>
                      </td>
                      <td>3</td>
                      <td>$356</td>
                      <td>Apr 10, 2021</td>
                      <td>
                        <div class="d-flex align-items-center gap-3 fs-6">
                          <a href="javascript" class="text-primary" data-bs-toggle="tooltip"
                            data-bs-placement="bottom" title="" data-bs-original-title="View detail"
                            aria-label="Views"><i class="bi bi-eye-fill"></i></a>
                          <a href="javascript" class="text-warning" data-bs-toggle="tooltip"
                            data-bs-placement="bottom" title="" data-bs-original-title="Edit info" aria-label="Edit"><i
                              class="bi bi-pencil-fill"></i></a>
                          <a href="javascript" class="text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom"
                            title="" data-bs-original-title="Delete" aria-label="Delete"><i
                              class="bi bi-trash-fill"></i></a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>javascript48572</td>
                      <td>
                        <div class="d-flex align-items-center gap-3">
                          <div class="product-box border">
                            <img src="assets/images/products/04.png" alt="" />
                          </div>
                          <div class="product-info">
                            <h6 class="product-name mb-1">Yellow Winter Jacket</h6>
                          </div>
                        </div>
                      </td>
                      <td>1</td>
                      <td>$149</td>
                      <td>Apr 11, 2021</td>
                      <td>
                        <div class="d-flex align-items-center gap-3 fs-6">
                          <a href="javascript" class="text-primary" data-bs-toggle="tooltip"
                            data-bs-placement="bottom" title="" data-bs-original-title="View detail"
                            aria-label="Views"><i class="bi bi-eye-fill"></i></a>
                          <a href="javascript" class="text-warning" data-bs-toggle="tooltip"
                            data-bs-placement="bottom" title="" data-bs-original-title="Edit info" aria-label="Edit"><i
                              class="bi bi-pencil-fill"></i></a>
                          <a href="javascript" class="text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom"
                            title="" data-bs-original-title="Delete" aria-label="Delete"><i
                              class="bi bi-trash-fill"></i></a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>javascript96857</td>
                      <td>
                        <div class="d-flex align-items-center gap-3">
                          <div class="product-box border">
                            <img src="assets/images/products/10.png" alt="" />
                          </div>
                          <div class="product-info">
                            <h6 class="product-name mb-1">Orange Micro Headphone</h6>
                          </div>
                        </div>
                      </td>
                      <td>2</td>
                      <td>$199</td>
                      <td>Apr 15, 2021</td>
                      <td>
                        <div class="d-flex align-items-center gap-3 fs-6">
                          <a href="javascript" class="text-primary" data-bs-toggle="tooltip"
                            data-bs-placement="bottom" title="" data-bs-original-title="View detail"
                            aria-label="Views"><i class="bi bi-eye-fill"></i></a>
                          <a href="javascript" class="text-warning" data-bs-toggle="tooltip"
                            data-bs-placement="bottom" title="" data-bs-original-title="Edit info" aria-label="Edit"><i
                              class="bi bi-pencil-fill"></i></a>
                          <a href="javascript" class="text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom"
                            title="" data-bs-original-title="Delete" aria-label="Delete"><i
                              class="bi bi-trash-fill"></i></a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-12 col-xl-4 d-flex">
          <div class="card radius-10 w-100">
            <div class="card-header bg-transparent border-0">
              <div class="row g-3 align-items-center">
                <div class="col">
                  <h6 class="mb-0">Top Sold</h6>
                </div>
                <div class="col">
                  <div class="d-flex align-items-center justify-content-end gap-3 cursor-pointer">
                    <div class="dropdown">
                      <a class="dropdown-toggle dropdown-toggle-nocaret" href="javascript" data-bs-toggle="dropdown"
                        aria-expanded="false"><i class="bx bx-dots-horizontal-rounded font-22 text-option"></i>
                      </a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="javascript">Action</a>
                        </li>
                        <li><a class="dropdown-item" href="javascript">Another action</a>
                        </li>
                        <li>
                          <hr class="dropdown-divider" />
                        </li>
                        <li><a class="dropdown-item" href="javascript">Something else here</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body p-0">
              <div class="best-product p-2 mb-3">
                <div class="best-product-item">
                  <div class="d-flex align-items-center gap-3">
                    <div class="product-box border">
                      <img src="assets/images/products/01.png" alt="" />
                    </div>
                    <div class="product-info flex-grow-1">
                      <div class="progress-wrapper">
                        <div class="progress" style={{ height: "5px" }}>
                          <div class="progress-bar bg-primary" role="progressbar" style={{ width: "80%" }}></div>
                        </div>
                      </div>
                      <p class="product-name mb-0 mt-2 fs-6">White Polo T-Shirt <span class="float-end">245</span></p>
                    </div>
                  </div>
                </div>
                <div class="best-product-item">
                  <div class="d-flex align-items-center gap-3">
                    <div class="product-box border">
                      <img src="assets/images/products/02.png" alt="" />
                    </div>
                    <div class="product-info flex-grow-1">
                      <div class="progress-wrapper">
                        <div class="progress" style={{ height: "5px" }}>
                          <div class="progress-bar bg-primary" role="progressbar" style={{ width: "70%" }}></div>
                        </div>
                      </div>
                      <p class="product-name mb-0 mt-2 fs-6">Black Coat Pant <span class="float-end">245</span></p>
                    </div>
                  </div>
                </div>
                <div class="best-product-item">
                  <div class="d-flex align-items-center gap-3">
                    <div class="product-box border">
                      <img src="assets/images/products/03.png" alt="" />
                    </div>
                    <div class="product-info flex-grow-1">
                      <div class="progress-wrapper">
                        <div class="progress" style={{ height: "5px" }}>
                          <div class="progress-bar bg-primary" role="progressbar" style={{ width: "60%" }}></div>
                        </div>
                      </div>
                      <p class="product-name mb-0 mt-2 fs-6">Blue Shade Jeans <span class="float-end">245</span></p>
                    </div>
                  </div>
                </div>
                <div class="best-product-item">
                  <div class="d-flex align-items-center gap-3">
                    <div class="product-box border">
                      <img src="assets/images/products/04.png" alt="" />
                    </div>
                    <div class="product-info flex-grow-1">
                      <div class="progress-wrapper">
                        <div class="progress" style={{ height: "5px" }}>
                          <div class="progress-bar bg-primary" role="progressbar" style={{ width: "50%" }}></div>
                        </div>
                      </div>
                      <p class="product-name mb-0 mt-2 fs-6">Yellow Winter Jacket <span class="float-end">245</span></p>
                    </div>
                  </div>
                </div>
                <div class="best-product-item">
                  <div class="d-flex align-items-center gap-3">
                    <div class="product-box border">
                      <img src="assets/images/products/05.png" alt="" />
                    </div>
                    <div class="product-info flex-grow-1">
                      <div class="progress-wrapper">
                        <div class="progress" style={{ height: "5px" }}>
                          <div class="progress-bar bg-primary" role="progressbar" style={{ width: "40%" }}></div>
                        </div>
                      </div>
                      <p class="product-name mb-0 mt-2 fs-6">Men Sports Shoes Nike <span class="float-end">245</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="best-product-item">
                  <div class="d-flex align-items-center gap-3">
                    <div class="product-box border">
                      <img src="assets/images/products/06.png" alt="" />
                    </div>
                    <div class="product-info flex-grow-1">
                      <div class="progress-wrapper">
                        <div class="progress" style={{ height: "5px" }}>
                          <div class="progress-bar bg-primary" role="progressbar" style={{ width: "30%" }}></div>
                        </div>
                      </div>
                      <p class="product-name mb-0 mt-2 fs-6">Fancy Home Sofa <span class="float-end">245</span></p>
                    </div>
                  </div>
                </div>
                <div class="best-product-item">
                  <div class="d-flex align-items-center gap-3">
                    <div class="product-box border">
                      <img src="assets/images/products/07.png" alt="" />
                    </div>
                    <div class="product-info flex-grow-1">
                      <div class="progress-wrapper">
                        <div class="progress" style={{ height: "5px" }}>
                          <div class="progress-bar bg-primary" role="progressbar" style={{ width: "20%" }}></div>
                        </div>
                      </div>
                      <p class="product-name mb-0 mt-2 fs-6">Sports Time Watch <span class="float-end">245</span></p>
                    </div>
                  </div>
                </div>
                <div class="best-product-item">
                  <div class="d-flex align-items-center gap-3">
                    <div class="product-box border">
                      <img src="assets/images/products/08.png" alt="" />
                    </div>
                    <div class="product-info flex-grow-1">
                      <div class="progress-wrapper">
                        <div class="progress" style={{ height: "5px" }}>
                          <div class="progress-bar bg-primary" role="progressbar" style={{ width: "10%" }}></div>
                        </div>
                      </div>
                      <p class="product-name mb-0 mt-2 fs-6">Women Blue Heals <span class="float-end">245</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <script>
    new PerfectScrollbar(".best-product")
  </script> */}
    </>
  );
};

export default Dashboard;