// 封装文件导出工具
export default {
    exportUtils (res, filename) {
        const link = document.createElement('a')
        let blob = new Blob([res.data], {type: 'application/vnd.ms-excel'})
        link.style.display = 'none'
        link.href = URL.createObjectURL(blob)
        link.setAttribute('download', filename)
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }
}
