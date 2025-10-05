"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Copy, Download, Package, Hash } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function SKUGenerator() {
  const [productName, setProductName] = useState("")
  const [category, setCategory] = useState("")
  const [brand, setBrand] = useState("")
  const [color, setColor] = useState("")
  const [size, setSize] = useState("")
  const [skuFormat, setSkuFormat] = useState("category-brand-name")
  const [generatedSKUs, setGeneratedSKUs] = useState([])
  const { toast } = useToast()

  const generateSKU = () => {
    if (!productName.trim()) {
      toast({
        title: "Error",
        description: "Please enter a product name",
        variant: "destructive"
      })
      return
    }

    const skus = []
    const baseName = productName.toLowerCase().replace(/[^a-z0-9]/g, '')
    const baseCategory = category.toLowerCase().replace(/[^a-z0-9]/g, '')
    const baseBrand = brand.toLowerCase().replace(/[^a-z0-9]/g, '')
    const baseColor = color.toLowerCase().replace(/[^a-z0-9]/g, '')
    const baseSize = size.toLowerCase().replace(/[^a-z0-9]/g, '')

    // Generate multiple SKU variations
    const variations = [
      { category, brand, color, size },
      { category: category || "GEN", brand: brand || "BRD", color: color || "CLR", size: size || "SZE" },
      { category: category || "CAT", brand: brand || "BRAND", color: color || "COLOR", size: size || "SIZE" }
    ]

    variations.forEach((variation, index) => {
      let sku = ""
      
      switch (skuFormat) {
        case "category-brand-name":
          sku = `${variation.category || "CAT"}-${variation.brand || "BRAND"}-${baseName}`
          break
        case "brand-category-name":
          sku = `${variation.brand || "BRAND"}-${variation.category || "CAT"}-${baseName}`
          break
        case "name-category-brand":
          sku = `${baseName}-${variation.category || "CAT"}-${variation.brand || "BRAND"}`
          break
        case "category-name-variant":
          sku = `${variation.category || "CAT"}-${baseName}-${variation.color || "CLR"}-${variation.size || "SZE"}`
          break
        case "numeric":
          sku = `${String(index + 1).padStart(3, '0')}-${baseName.substring(0, 6)}`
          break
        case "alphanumeric":
          sku = `${baseName.substring(0, 4).toUpperCase()}${String(index + 1).padStart(3, '0')}`
          break
        default:
          sku = `${variation.category || "CAT"}-${variation.brand || "BRAND"}-${baseName}`
      }

      skus.push({
        id: index + 1,
        sku: sku.toUpperCase(),
        format: skuFormat,
        details: variation
      })
    })

    setGeneratedSKUs(skus)
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "Copied!",
      description: "SKU copied to clipboard",
    })
  }

  const downloadSKUs = () => {
    const content = generatedSKUs.map(sku => `${sku.sku} - ${productName}`).join('\n')
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `skus-${productName.toLowerCase().replace(/[^a-z0-9]/g, '-')}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    
    toast({
      title: "Downloaded!",
      description: "SKU list downloaded successfully",
    })
  }

  const resetGenerator = () => {
    setProductName("")
    setCategory("")
    setBrand("")
    setColor("")
    setSize("")
    setSkuFormat("category-brand-name")
    setGeneratedSKUs([])
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Package className="w-4 h-4" />
              Free Generator
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              SKU Generator
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Generate unique SKU codes for your products with our free SKU generator tool
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Generator Form */}
            <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  Product Information
                </CardTitle>
                <CardDescription>
                  Enter product details to generate SKU codes
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="productName">Product Name *</Label>
                  <Input
                    id="productName"
                    type="text"
                    placeholder="Enter product name"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    className="text-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Input
                    id="category"
                    type="text"
                    placeholder="e.g., Electronics, Clothing"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="brand">Brand</Label>
                  <Input
                    id="brand"
                    type="text"
                    placeholder="e.g., Nike, Samsung"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="color">Color</Label>
                  <Input
                    id="color"
                    type="text"
                    placeholder="e.g., Red, Blue, Black"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="size">Size</Label>
                  <Input
                    id="size"
                    type="text"
                    placeholder="e.g., S, M, L, XL"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="skuFormat">SKU Format</Label>
                  <Select value={skuFormat} onValueChange={setSkuFormat}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select SKU format" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="category-brand-name">Category-Brand-Name</SelectItem>
                      <SelectItem value="brand-category-name">Brand-Category-Name</SelectItem>
                      <SelectItem value="name-category-brand">Name-Category-Brand</SelectItem>
                      <SelectItem value="category-name-variant">Category-Name-Color-Size</SelectItem>
                      <SelectItem value="numeric">Numeric (001-NAME)</SelectItem>
                      <SelectItem value="alphanumeric">Alphanumeric (NAME001)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex gap-3">
                  <Button onClick={generateSKU} className="flex-1 bg-orange-600 hover:bg-orange-700">
                    Generate SKU
                  </Button>
                  <Button onClick={resetGenerator} variant="outline" className="flex-1">
                    Reset
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Generated SKUs */}
            <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Hash className="w-5 h-5" />
                  Generated SKUs
                </CardTitle>
                <CardDescription>
                  Your unique product SKU codes
                </CardDescription>
              </CardHeader>
              <CardContent>
                {generatedSKUs.length > 0 ? (
                  <div className="space-y-4">
                    {generatedSKUs.map((sku) => (
                      <div key={sku.id} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-mono text-lg font-bold text-gray-900 dark:text-white">
                              {sku.sku}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-300">
                              Format: {sku.format}
                            </div>
                          </div>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => copyToClipboard(sku.sku)}
                            className="ml-2"
                          >
                            <Copy className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}

                    <div className="pt-4 border-t border-gray-200 dark:border-gray-600">
                      <Button
                        onClick={downloadSKUs}
                        className="w-full bg-orange-600 hover:bg-orange-700"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download All SKUs
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 dark:text-gray-400">
                      Enter product details to generate SKU codes
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Information Section */}
          <Card className="mt-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle>About SKU Generator</CardTitle>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>
                SKU (Stock Keeping Unit) is a unique identifier for products in inventory management. 
                Our SKU generator helps you create consistent, unique codes for your products.
              </p>
              <h3>SKU Format Options:</h3>
              <ul>
                <li><strong>Category-Brand-Name:</strong> CAT-BRAND-PRODUCT</li>
                <li><strong>Brand-Category-Name:</strong> BRAND-CAT-PRODUCT</li>
                <li><strong>Name-Category-Brand:</strong> PRODUCT-CAT-BRAND</li>
                <li><strong>Category-Name-Variant:</strong> CAT-PRODUCT-COLOR-SIZE</li>
                <li><strong>Numeric:</strong> 001-PRODUCT</li>
                <li><strong>Alphanumeric:</strong> PROD001</li>
              </ul>
              <h3>Benefits of Using SKU Codes:</h3>
              <ul>
                <li>Unique product identification</li>
                <li>Easy inventory management</li>
                <li>Consistent product tracking</li>
                <li>Simplified ordering and restocking</li>
                <li>Better organization and categorization</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
