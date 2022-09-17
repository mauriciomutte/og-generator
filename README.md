<h1 align="center">🖼️ OG Generator</h1>

Serverless service that generates dynamic Open Graph images used in my personal blog.

## What is an Open Graph Image?

Basically, it's the image that is displayed when you share a hyperlink on Twitter, Facebook, or Slack. See in example:

<img width="436" alt="og-image-example" src="https://user-images.githubusercontent.com/20569339/190873818-b0dd1932-4a87-44ba-845d-4f04acfc505a.png">

## How it works

### Creating the template

The single existing page is used as a template with a default size (width and height). You can add any style like you are creating a component

The page could receive props from URL query params and used this to create dynamic images

### Serveless function

[Puppeteer](https://github.com/puppeteer/puppeteer) and [chrome-aws-lambda](https://github.com/alixaxel/chrome-aws-lambda) are used to open the template page and get a print screen setting a viewport (with correct image size).

We need an image URL (with .png extension) to show in the Open Graph tag meta. For that we can configure the next redirect to use the API service as image URL

**Note:** the [Puppeteer](https://github.com/puppeteer/puppeteer) and [chrome-aws-lambda](https://github.com/alixaxel/chrome-aws-lambda) libraries must be at the same version. Latest version of [Puppeteer](https://github.com/puppeteer/puppeteer) can cause error to running in Vercel.

## Resources

- [vercel/og-image]()
