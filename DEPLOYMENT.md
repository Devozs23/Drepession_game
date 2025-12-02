# 🚀 Deployment Guide for AWS S3

## Professional S3 Website Deployment

This guide will help you deploy "Pathways to Light" to AWS S3 with proper configuration.

---

## 📋 Prerequisites

- AWS Account
- AWS CLI installed and configured
- Your S3 bucket name: `jabronsky`

---

## 🔧 Step 1: Configure S3 Bucket for Static Website Hosting

### Via AWS Console:

1. **Go to S3** in AWS Console
2. **Select your bucket** (`jabronsky`)
3. **Go to Properties tab**
4. **Scroll to "Static website hosting"**
5. **Enable it** with these settings:
   - **Index document**: `index.html`
   - **Error document**: `index.html` (for single-page apps)

### Via AWS CLI:

```bash
aws s3 website s3://jabronsky/ --index-document index.html --error-document index.html
```

---

## 🔐 Step 2: Fix Bucket Permissions (Fixes 403 Error)

The 403 error happens because the bucket policy doesn't allow public read access.

### Add Bucket Policy:

1. **Go to your bucket in S3 Console**
2. **Click on "Permissions" tab**
3. **Scroll to "Bucket policy"**
4. **Add this policy** (replace `jabronsky` with your bucket name if different):

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::jabronsky/*"
        }
    ]
}
```

### Via AWS CLI:

```bash
aws s3api put-bucket-policy --bucket jabronsky --policy '{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::jabronsky/*"
        }
    ]
}'
```

---

## 📤 Step 3: Upload Files to S3

### Option A: Using AWS CLI (Recommended)

```bash
# Upload all files with proper content types
aws s3 sync . s3://jabronsky/ \
  --exclude ".git/*" \
  --exclude ".gitignore" \
  --exclude "README.md" \
  --exclude "DEPLOYMENT.md" \
  --cache-control "public, max-age=3600"

# Set correct content types
aws s3 cp index.html s3://jabronsky/index.html --content-type "text/html; charset=utf-8"
aws s3 cp game-complete.html s3://jabronsky/game-complete.html --content-type "text/html; charset=utf-8"
aws s3 cp style.css s3://jabronsky/style.css --content-type "text/css; charset=utf-8"
aws s3 cp game.js s3://jabronsky/game.js --content-type "application/javascript; charset=utf-8"
```

### Option B: Using AWS Console

1. Go to your bucket
2. Click "Upload"
3. Drag and drop these files:
   - `index.html`
   - `game-complete.html`
   - `style.css`
   - `game.js`
4. Click "Upload"

---

## 🌐 Step 4: Access Your Website

Your website will be available at:

```
http://jabronsky.s3-website-us-east-1.amazonaws.com/
```

**Note**: The URL in your original message had `/23939232038asas.html?world=firmera` which doesn't exist. The correct URLs are:

- **Main page**: `http://jabronsky.s3-website-us-east-1.amazonaws.com/`
- **Standalone version**: `http://jabronsky.s3-website-us-east-1.amazonaws.com/game-complete.html`

---

## 🔒 Step 5: Block Public Access Settings

Make sure "Block all public access" is **OFF**:

1. Go to bucket **Permissions**
2. Under **"Block public access (bucket settings)"**
3. Click **Edit**
4. **Uncheck** "Block all public access"
5. Save changes

---

## 🎯 Professional Deployment Script

Create a `deploy.sh` file:

```bash
#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Deploying Pathways to Light to S3...${NC}"

# Variables
BUCKET_NAME="jabronsky"
REGION="us-east-1"

# Sync files
echo -e "${BLUE}📤 Uploading files...${NC}"
aws s3 sync . s3://$BUCKET_NAME/ \
  --exclude ".git/*" \
  --exclude "*.md" \
  --exclude ".gitignore" \
  --exclude "deploy.sh" \
  --cache-control "public, max-age=3600" \
  --delete

# Set proper content types
echo -e "${BLUE}🔧 Setting content types...${NC}"
aws s3 cp index.html s3://$BUCKET_NAME/index.html --content-type "text/html; charset=utf-8" --cache-control "public, max-age=3600"
aws s3 cp game-complete.html s3://$BUCKET_NAME/game-complete.html --content-type "text/html; charset=utf-8" --cache-control "public, max-age=3600"
aws s3 cp style.css s3://$BUCKET_NAME/style.css --content-type "text/css; charset=utf-8" --cache-control "public, max-age=86400"
aws s3 cp game.js s3://$BUCKET_NAME/game.js --content-type "application/javascript; charset=utf-8" --cache-control "public, max-age=86400"

echo -e "${GREEN}✅ Deployment complete!${NC}"
echo -e "${GREEN}🌐 Your site is live at: http://$BUCKET_NAME.s3-website-$REGION.amazonaws.com/${NC}"
```

Make it executable:

```bash
chmod +x deploy.sh
```

Run it:

```bash
./deploy.sh
```

---

## 🌟 Step 6: Custom Domain (Optional but Professional)

### Using CloudFront + Route 53:

1. **Create CloudFront Distribution**
   - Origin: Your S3 website endpoint
   - Enable HTTPS
   - Add custom SSL certificate

2. **Configure Route 53**
   - Add A record pointing to CloudFront
   - Example: `pathways-to-light.com` → CloudFront distribution

3. **Benefits**:
   - HTTPS/SSL encryption
   - Custom domain name
   - CDN performance
   - Better SEO

---

## 🔍 Troubleshooting

### 403 Forbidden Error

**Problem**: Getting 403 when accessing the site

**Solutions**:
1. Check bucket policy (Step 2)
2. Verify "Block public access" is OFF
3. Ensure files are uploaded correctly
4. Check file permissions (should be public-read)

### 404 Not Found Error

**Problem**: Page not found

**Solutions**:
1. Verify file names are correct (`index.html` not `Index.html`)
2. Check Static Website Hosting is enabled
3. Use the correct S3 website URL (not the REST API URL)

### Wrong Content Type

**Problem**: CSS/JS not loading properly

**Solution**:
```bash
# Fix content types
aws s3 cp style.css s3://jabronsky/style.css --content-type "text/css"
aws s3 cp game.js s3://jabronsky/game.js --content-type "application/javascript"
```

---

## 📊 Monitoring & Analytics

### CloudWatch Metrics

Monitor your S3 website:
```bash
aws cloudwatch get-metric-statistics \
  --namespace AWS/S3 \
  --metric-name NumberOfObjects \
  --dimensions Name=BucketName,Value=jabronsky \
  --start-time 2025-01-01T00:00:00Z \
  --end-time 2025-12-31T23:59:59Z \
  --period 86400 \
  --statistics Average
```

### Google Analytics (Recommended)

Add to your `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

---

## 💰 Cost Optimization

### S3 Pricing for Small Sites:

- **Storage**: $0.023 per GB/month
- **Requests**: $0.0004 per 1,000 GET requests
- **Data Transfer**: First 100 GB/month free

**Estimated monthly cost for this project**: ~$0.50 - $2.00 USD

### Tips:
1. Use CloudFront for caching (reduces S3 requests)
2. Set appropriate cache headers
3. Compress files before upload
4. Use lifecycle policies for old versions

---

## ✅ Production Checklist

Before going live:

- [ ] Bucket policy configured for public access
- [ ] Static website hosting enabled
- [ ] All files uploaded with correct content types
- [ ] Test all links and resources
- [ ] Verify crisis hotline links work
- [ ] Test on mobile devices
- [ ] Check accessibility (screen readers)
- [ ] Set up monitoring/analytics
- [ ] Configure custom domain (optional)
- [ ] Enable CloudFront for HTTPS (recommended)

---

## 🆘 Support

If you encounter issues:

1. Check AWS S3 documentation: https://docs.aws.amazon.com/s3/
2. Review CloudWatch logs
3. Verify IAM permissions
4. Test with AWS CLI

---

## 🔐 Security Best Practices

1. **Enable versioning** on S3 bucket
2. **Enable logging** for access logs
3. **Use HTTPS** via CloudFront
4. **Implement CSP headers** (Content Security Policy)
5. **Regular security audits**

---

**Your professional mental health website is ready to help people! 🌟**
