# Ghost as a Subdirectory
This is a custom Cloudflare Worker that allows you to run your Ghost blog as a subdirectory on your domain.

## Installation
Create a new Cloudflare worker and paste the code from worker.js into the script editor.

* Update the `subdomain` variable with the URL of your Ghost installation.
* Update the `root` variable with the root domain of your domain (where you want the subdirectory to be).
* Leave `blogPath` as is, ideally. However you can change this at your own risk.
* Save the worker and create the following Worker Routes:

```
/assets*
/public*
/content*
/blog*
```

## Usage
Once the worker is deployed, your Ghost blog will be accessible at the subdirectory specified in the installation step (e.g. example.com/blog). All requests to the subdirectory will be proxied to your Ghost installation, while requests to the rest of your domain will continue to function normally.

## Note
Please make sure you have a valid SSL certificate for the domain and ghost installed with correct cname record.

## Support
If you have any questions or issues with this worker, please open an issue in this repository or contact me through my website.
