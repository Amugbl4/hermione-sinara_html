module.exports = {
    
    baseUrl: 'http://svx.aero',
    //waitTimeout: 1000,
    screenshotDelay: 3000,
    sets: {
        all: {
            files: 'test/desktop'
        },
        /* desktop: {
            files: 'test/desktop/test.js'
        } */
    },
    
    browsers: {
        chrome_fhd: {
            compositeImage: true,
            windowSize: '1920x1080',
            screenshotsDir: 'screen/svx/chrome/1920',
            desiredCapabilities: {
                browserName: 'chrome',
                chromeOptions: {
                    args: ['--headless']
                }
            } 
        },

         chrome_1440: {
             compositeImage: true,
             windowSize: '1440x900',
             screenshotsDir: 'screen/svx/chrome/1440',
             desiredCapabilities: {
                 browserName: 'chrome',
                 chromeOptions: {
                     args: ['--headless']
                 }
             }
         },
 
         mobile: {
             screenshotsDir: 'screen/svx/chrome/mobile',
             compositeImage: true, 
             desiredCapabilities: {
                 browserName: 'chrome',
                 version: '71.0',
                 chromeOptions: {
                     mobileEmulation: {
                         deviceMetrics: {
                             width: 320,
                             height: 568,
                             pixelRatio: 1.0
                         },
                         userAgent: [
                            'Mozilla/5.0',
                            '(iPhone; CPU iPhone OS 10_1_1 like Mac OS X)',
                            'AppleWebKit/602.2.14',
                            '(KHTML, like Gecko)',
                            'Version/10.0',
                            'Mobile/14B100',
                            'Safari/602.1'
                        ].join(' ')   
                     },
                     args: ['--headless']
                 }
             }
         },
     
  
        ie11_fhd: {
            compositeImage: true,
            windowSize: '1920x1080',
            screenshotsDir: 'screen/svx/ie/1920',
            desiredCapabilities: {
                browserName: 'internet explorer',
                version: '11',
                'ie.enableFullPageScreenshot': false
            },
                
        },


        ie11_fhd: {
            compositeImage: true,
            windowSize: '1440x900',
            screenshotsDir: 'screen/svx/ie/1440',
            desiredCapabilities: {
                browserName: 'internet explorer',
                version: '11',
                'ie.enableFullPageScreenshot': false
            },
        },

        /* edge: {
            compositeImage: true,
            desiredCapabilities: {
                browserName: 'MicrosoftEdge',
            }
        }  */
    },

    plugins: {
        'html-reporter/hermione': { enabled: true, path: 'hermione-reports', defaultView: 'all' },
        'json-reporter/hermione': { enabled: true, path: 'reports/report.json' }
    },


    prepareBrowser: function (browser) {
        var _click = function click(selector) {
            var _this = this;
        
            return this.element(selector).then(function (elem) {
              
                if (!elem.value) {
                   
                    return false;
                }
        
                return _this.elementIdClick(elem.value.ELEMENT);
            });
        };

        browser.addCommand('clickIfAvailable', _click);
     },
};